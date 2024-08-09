// app/components/DerivBot.tsx

'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { parseString } from 'xml2js';

interface Field {
  $: { name: string };
  _: string;
}

interface Block {
  $?: { id: string; type: string };
  field?: Field[];
  next?: { block: Block[] };
  statement?: { [key: string]: { block: Block[] } };
  value?: { [key: string]: { shadow: { field: Field[] }[] } };
}

interface BotXml {
  xml: {
    $: { xmlns: string; is_dbot: string; collection: string };
    block: Block[];
  };
}

const DerivBot: React.FC = () => {
  const [botXml, setBotXml] = useState<BotXml | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const botXmlString = `
      <xml xmlns="https://developers.google.com/blockly/xml" is_dbot="true" collection="false">
        <block type="trade_definition" id="MgCZ?YfZt/zF42ec@zE+" deletable="false" x="0" y="60">
          <statement name="TRADE_OPTIONS">
            <block type="trade_definition_market" id="o^9jKHM/78P*UhlSczE^" deletable="false" movable="false">
              <field name="MARKET_LIST">synthetic_index</field>
              <field name="SUBMARKET_LIST">random_index</field>
              <field name="SYMBOL_LIST">R_75</field>
              <next>
                <block type="trade_definition_tradetype" id="|15-+7jb/.;rQYVx^uK6" deletable="false" movable="false">
                  <field name="TRADETYPECAT_LIST">callput</field>
                  <field name="TRADETYPE_LIST">higherlower</field>
                  <next>
                    <block type="trade_definition_contracttype" id="di)wQ/~roWT1DXj!+e7s" deletable="false" movable="false">
                      <field name="TYPE_LIST">both</field>
                      <next>
                        <block type="trade_definition_candleinterval" id=":Gp2%1kZ0Vp}eB;C#Mj{" deletable="false" movable="false">
                          <field name="CANDLEINTERVAL_LIST">900</field>
                          <next>
                            <block type="trade_definition_restartbuysell" id="Dg?@h8wn?Sk9:*hs9JK/" deletable="false" movable="false">
                              <field name="TIME_MACHINE_ENABLED">FALSE</field>
                              <next>
                                <block type="trade_definition_restartonerror" id="t{5nvYL9PFb!;DxDC#Ou" deletable="false" movable="false">
                                  <field name="RESTARTONERROR">TRUE</field>
                                </block>
                              </next>
                            </block>
                          </next>
                        </block>
                      </next>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </statement>
          <statement name="SUBMARKET">
            <block type="trade_definition_tradeoptions" id="E5dB[ArE=h}6Xc];5rJ?">
              <field name="DURATIONTYPE_LIST">t</field>
              <field name="BARRIEROFFSETTYPE_LIST">+</field>
              <value name="DURATION">
                <shadow type="math_number_positive" id="oyd=@q4oBD#V_J@qzj~">
                  <field name="NUM">5</field>
                </shadow>
              </value>
              <value name="AMOUNT">
                <shadow type="math_number_positive" id="8a}1AwxFeD.LMWTZc^a@">
                  <field name="NUM">1</field>
                </shadow>
              </value>
              <value name="BARRIEROFFSET">
                <shadow type="math_number_positive" id="TF2FLy.#L}jZY/A%S8YF" inline="true">
                  <field name="NUM">50.7552</field>
                </shadow>
              </value>
            </block>
          </statement>
        </block>
        <block type="during_purchase" id="v_K.[h=1I%+@O}byy60v" x="941" y="60">
          <statement name="DURING_PURCHASE_STACK">
            <block type="controls_if" id="+AplnzT0HnKDI.=QOG3X">
              <value name="IF0">
                <block type="check_sell" id="Vc_Zh^wCbke%#jD?oG8C"></block>
              </value>
            </block>
          </statement>
        </block>
        <block type="after_purchase" id="E06Ow*o52}R.}l%bXk#u" x="941" y="292">
          <statement name="AFTERPURCHASE_STACK">
            <block type="trade_again" id="dp5PHv#;i~^vE}5)UQqf"></block>
          </statement>
        </block>
        <block type="before_purchase" id="pJB_astDIomWm_!m*|f~" deletable="false" x="0" y="658">
          <statement name="BEFOREPURCHASE_STACK">
            <block type="purchase" id="RTR{%Xi[[2xB7@;2hf#$">
              <field name="PURCHASE_LIST">PUT</field>
            </block>
          </statement>
        </block>
      </xml>
    `;

    parseString(botXmlString, { explicitArray: false, mergeAttrs: true }, (err, result) => {
      if (err) {
        console.error('Error parsing bot XML:', err);
        setError('Failed to parse bot XML');
      } else {
        console.log('Parsed XML:', result);
        setBotXml(result as BotXml);
      }
    });
  }, []);

  const getFieldValue = (block: Block | undefined, fieldName: string): string => {
    return block?.field?.find(f => f.$.name === fieldName)?._  || '';
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!botXml || !botXml.xml || !botXml.xml.block) {
    return <p>Loading bot...</p>;
  }

  const tradeDefinitionBlock = botXml.xml.block.find(block => block.$ && block.$.type === 'trade_definition');
  const duringPurchaseBlock = botXml.xml.block.find(block => block.$ && block.$.type === 'during_purchase');
  const afterPurchaseBlock = botXml.xml.block.find(block => block.$ && block.$.type === 'after_purchase');
  const beforePurchaseBlock = botXml.xml.block.find(block => block.$ && block.$.type === 'before_purchase');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900 text-white shadow-md font-serif p-6"
    >
      <h2 className="md:text-xl text-md  font-bold mb-8 text-center">Forex-Deriv Bot</h2>
      <div className="mb-4">
        <h3 className="text-sm font-semibold">Trade Options</h3>
        <p>Market: {getFieldValue(tradeDefinitionBlock?.statement?.TRADE_OPTIONS?.block?.[0], 'MARKET_LIST')}</p>
        <p>Submarket: {getFieldValue(tradeDefinitionBlock?.statement?.TRADE_OPTIONS?.block?.[0], 'SUBMARKET_LIST')}</p>
        <p>Symbol: {getFieldValue(tradeDefinitionBlock?.statement?.TRADE_OPTIONS?.block?.[0], 'SYMBOL_LIST')}</p>
        <p>Trade Type: {getFieldValue(tradeDefinitionBlock?.statement?.TRADE_OPTIONS?.block?.[0]?.next?.block?.[0], 'TRADETYPE_LIST')}</p>
        <p>Contract Type: {getFieldValue(tradeDefinitionBlock?.statement?.TRADE_OPTIONS?.block?.[0]?.next?.block?.[0]?.next?.block?.[0], 'TYPE_LIST')}</p>
        <p>Candle Interval: {getFieldValue(tradeDefinitionBlock?.statement?.TRADE_OPTIONS?.block?.[0]?.next?.block?.[0]?.next?.block?.[0]?.next?.block?.[0], 'CANDLEINTERVAL_LIST')}</p>
        <p>Restart Buy/Sell: {getFieldValue(tradeDefinitionBlock?.statement?.TRADE_OPTIONS?.block?.[0]?.next?.block?.[0]?.next?.block?.[0]?.next?.block?.[0]?.next?.block?.[0], 'TIME_MACHINE_ENABLED')}</p>
        <p>Restart on Error: {getFieldValue(tradeDefinitionBlock?.statement?.TRADE_OPTIONS?.block?.[0]?.next?.block?.[0]?.next?.block?.[0]?.next?.block?.[0]?.next?.block?.[0]?.next?.block?.[0], 'RESTARTONERROR')}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold">Trade Parameters</h3>
        <p>Duration Type: {getFieldValue(tradeDefinitionBlock?.statement?.SUBMARKET?.block?.[0], 'DURATIONTYPE_LIST')}</p>
        <p>Barrier Offset Type: {getFieldValue(tradeDefinitionBlock?.statement?.SUBMARKET?.block?.[0], 'BARRIEROFFSETTYPE_LIST')}</p>
        <p>Duration: {tradeDefinitionBlock?.statement?.SUBMARKET?.block?.[0]?.value?.DURATION?.shadow?.[0]?.field?.find(f => f.$.name === 'NUM')?._}</p>
        <p>Amount: {tradeDefinitionBlock?.statement?.SUBMARKET?.block?.[0]?.value?.AMOUNT?.shadow?.[0]?.field?.find(f => f.$.name === 'NUM')?._}</p>
        <p>Barrier Offset: {tradeDefinitionBlock?.statement?.SUBMARKET?.block?.[0]?.value?.BARRIEROFFSET?.shadow?.[0]?.field?.find(f => f.$.name === 'NUM')?._}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold">During Purchase</h3>
        <p>Check Sell: {duringPurchaseBlock?.statement?.DURING_PURCHASE_STACK?.block?.[0]?.$ && duringPurchaseBlock.statement.DURING_PURCHASE_STACK.block[0].$.type === 'controls_if' ? 'Yes' : 'No'}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold">After Purchase</h3>
        <p>{afterPurchaseBlock?.statement?.AFTERPURCHASE_STACK?.block?.[0]?.$ && afterPurchaseBlock.statement.AFTERPURCHASE_STACK.block[0].$.type === 'trade_again' ? 'Trade Again' : 'N/A'}</p>
      </div>
      <div>
        <h3 className="text-sm font-semibold">Before Purchase</h3>
        <p>Purchase: {getFieldValue(beforePurchaseBlock?.statement?.BEFOREPURCHASE_STACK?.block?.[0], 'PURCHASE_LIST')}</p>
      </div>
    </motion.div>
  );
};

export default DerivBot;
