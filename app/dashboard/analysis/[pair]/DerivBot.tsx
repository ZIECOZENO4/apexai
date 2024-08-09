// app/components/TradingBot.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/javascript';

const TradingBot: React.FC = () => {
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const toolbox = `
    <xml xmlns="https://developers.google.com/blockly/xml">
      <block type="controls_if"></block>
      <block type="logic_compare"></block>
      <block type="math_number"></block>
      <block type="text"></block>
      <!-- Add more blocks as needed -->
    </xml>
  `;

  useEffect(() => {
    if (blocklyDiv.current) {
      const workspace = Blockly.inject(blocklyDiv.current, {
        toolbox: toolbox,
      });

      const botCode = `
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
                <mutation xmlns="http://www.w3.org/1999/xhtml" has_first_barrier="true" has_second_barrier="false" has_prediction="false"></mutation>
                <field name="DURATIONTYPE_LIST">t</field>
                <field name="BARRIEROFFSETTYPE_LIST">+</field>
                <value name="DURATION">
                  <shadow type="math_number_positive" id="oyd=@q4oBD#V\`_J@qzj~">
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
          <block type="before_purchase" id="pJB\`astDIomWm_!m*|f~" deletable="false" x="0" y="658">
            <statement name="BEFOREPURCHASE_STACK">
              <block type="purchase" id="RTR{%Xi[[2xB7@;2hf#$">
                <field name="PURCHASE_LIST">PUT</field>
              </block>
            </statement>
          </block>
        </xml>
      `;

      const xml = Blockly.Xml.textToDom(botCode);
      Blockly.Xml.domToWorkspace(xml, workspace);
    }
  }, []);

  return <div ref={blocklyDiv} style={{ height: '480px', width: '100%' }} />;
};

export default TradingBot;