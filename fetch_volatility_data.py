import MetaTrader5 as mt5
import pandas as pd
import json
import os
from dotenv import load_dotenv
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        load_dotenv()

        account = int(os.getenv("MT5_ACCOUNT"))
        password = os.getenv("MT5_PASSWORD")
        server = os.getenv("MT5_SERVER")

        if not mt5.initialize():
            self.send_response(500)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"MT5 initialization failed.")
            return

        login_result = mt5.login(account, password, server)

        if not login_result:
            self.send_response(500)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"Login failed.")
            mt5.shutdown()
            return

        symbol = "VOLATILITY_75"

        if not mt5.symbol_select(symbol, True):
            self.send_response(500)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"Symbol selection failed.")
            mt5.shutdown()
            return

        tick = mt5.symbol_info_tick(symbol)
        rates = mt5.copy_rates_from_pos(symbol, mt5.TIMEFRAME_M1, 0, 1440)

        if tick is None or rates is None:
            self.send_response(500)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b"Data fetch failed.")
            mt5.shutdown()
            return

        df = pd.DataFrame(rates)
        df['time'] = pd.to_datetime(df['time'], unit='s')

        tick_data = tick._asdict()
        historical_data = df.to_dict(orient='records')

        response = {
            'tick_data': tick_data,
            'historical_data': historical_data
        }

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(response).encode())

        mt5.shutdown()
