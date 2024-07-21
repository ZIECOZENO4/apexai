import MetaTrader5 as mt5
import pandas as pd
import json
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Retrieve environment variables
account = int(os.getenv("MT5_ACCOUNT"))
password = os.getenv("MT5_PASSWORD")
server = os.getenv("MT5_SERVER")

# Initialize MT5 connection
if not mt5.initialize():
    print("initialize() failed, error code =", mt5.last_error())
    quit()

# Log in to your MT5 account
login_result = mt5.login(account, password, server)

if not login_result:
    print("Login failed, error code =", mt5.last_error())
    mt5.shutdown()
    quit()

# Define the symbol you want to track (example: Volatility 75 Index)
symbol = "VOLATILITY_75"

# Ensure the symbol is available in Market Watch
if not mt5.symbol_select(symbol, True):
    print(f"Failed to select symbol {symbol}, error code =", mt5.last_error())
    mt5.shutdown()
    quit()

# Fetch real-time tick data
def fetch_volatility_data():
    tick = mt5.symbol_info_tick(symbol)
    if tick is None:
        print(f"Failed to get tick for {symbol}, error code =", mt5.last_error())
        return None
    return tick

# Fetch historical data (example: 1-minute bars for the last day)
def fetch_historical_data():
    rates = mt5.copy_rates_from_pos(symbol, mt5.TIMEFRAME_M1, 0, 1440)
    if rates is None:
        print(f"Failed to get historical data for {symbol}, error code =", mt5.last_error())
        return None
    df = pd.DataFrame(rates)
    df['time'] = pd.to_datetime(df['time'], unit='s')
    return df

# Fetch and save volatility data to a JSON file
tick_data = fetch_volatility_data()
historical_data = fetch_historical_data()

public_dir = os.path.join(os.path.dirname(__file__), 'public')

if tick_data:
    with open(os.path.join(public_dir, 'volatility_tick.json'), 'w') as f:
        json.dump(tick_data._asdict(), f)

if historical_data is not None:
    historical_data.to_json(os.path.join(public_dir, 'volatility_historical.json'), orient='records')

# Shutdown MT5 connection
mt5.shutdown()
