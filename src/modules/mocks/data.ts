const MOCK_DATA = {
  met: {
    name: 'Meteora',
    description: 'Meteora is a suite of dynamic liquidity protocols on Solana.',
    slug: 'MET',
    website: 'https://www.meteora.ag',
    twitter: 'https://x.com/MeteoraAG',
    telegram: 'https://t.me/MeteoraAG',
    content: `
      What is Meteora ($MET)? All About the “Dynamic Liquidity Layer” on Solana
Meteora is a suite of dynamic liquidity protocols on Solana, featuring DLMM (Dynamic Liquidity Market Maker), DAMM v2 (a fee-optimized AMM with single-sided support), Dynamic Bonding Curve / Universal Curve (a customizable pricing curve with up to 16 points), and yield-optimizing Vaults. The goal: help projects launch liquidity efficiently and help LPs earn better fees across market conditions.
What is Meteora?
Meteora provides the liquidity infrastructure layer for the Solana ecosystem, with core products:
DLMM – lets LPs concentrate liquidity, uses dynamic fees that react to volatility, and allows real-time strategy selection (spot, trend, volatility, etc.).
DAMM v2 – a balanced/one-sided AMM that optimizes trading fees and supports Launch Pool flows to simplify initial liquidity bootstrapping.
Dynamic Bonding Curve / Universal Curve – a “universal” curve allowing up to 16 configurable points to shape price/token dynamics; can be applied to launchpads.
Dynamic Vaults – smart yield optimizers that allocate capital across Solana lending protocols using the “Hermes” keeper, monitoring risk minute by minute.
Beyond products, Meteora publishes a “Meteora Manifesto” outlining a mission to open up liquidity opportunities for more participants in open finance.
Why is Meteora important?
Fair & efficient launches: With DLMM and DAMM v2 Launch Pool, teams can launch single-sided or concentrated liquidity, cut slippage costs, and tailor setup across phases.
LP optimization: Dynamic fees + concentrated liquidity help LPs capture more fees in active price ranges instead of spreading capital thin.
Deep curve customization: Universal Curve / DBC enables sophisticated issuance and liquidity-absorption strategies (e.g., mitigating early “pump-dump,” adapting to market phases).
How does Meteora work?
Dynamic Pools & Fees (DLMM/DAMM v2): Liquidity providers choose strategies (spot/volatility/…), and fees adapt to market conditions to compensate for risk.
One-sided / Concentrated: Initialize single-sided pools (especially useful at launch) or concentrate liquidity around target price ranges to boost capital efficiency.
Universal Curve / DBC: Configure a 16-point piecewise constant-product curve to define price behavior.
Vaults: Rebalance capital across lending markets to maximize yield and reduce liquidity/interest-rate risk.
How is Meteora used?
Token Launch: Use DAMM v2 Launch Pool to spin up liquidity quickly with a config file + CLI; or use DLMM single-sided for a stronger launch experience on Solana.
Pro LPs: Pick a suitable DLMM strategy (spot/vol) and update liquidity ranges as volatility changes.
Curve design for issuance: Apply Universal Curve/DBC to manage supply–demand and reduce price shocks.
Token & ecosystem
$MET is referenced as the ecosystem’s core token. Recent mentions indicate airdrop/TGE timing around October (from market roundups; follow official channels for confirmed timelines).
Ecosystem direction and community values are reflected in the Meteora Manifesto.
How to participate
For projects:
Go to the docs’ “Quick Launch” to create a DAMM v2 Launch Pool (prepare a config file → run the CLI).
If you need concentrated liquidity with dynamic fees, consider DLMM and pick a fitting strategy.
Want a customizable launchpad curve? Explore DBC/Universal Curve.
For LPs/traders:
Explore DLMM Pools in the Meteora app to view TVL, liquidity ranges, and 24h fees.
Choose a DLMM strategy (spot/vol…), set ranges, and monitor fee performance.
Consider Vaults if you prefer passive, cross-protocol yield.
Risks to know
Volatility & impermanent loss: Concentration boosts capital efficiency but increases IL risk if price moves fast. (General AMM concept.)
Misconfigured strategy: Poor fee/range settings can reduce fee capture or lead to fewer fills.
Contract / lending-market risk: Even with monitoring, lending carries systemic/liquidity risks.
Meteora is becoming a core “dynamic liquidity layer” on Solana, combining dynamic-fee DLMM, single-sided DAMM v2, Universal Curve/DBC, and Vaults to serve both projects and pro LPs. If you’re preparing to launch a token or optimize LP strategies, Meteora is a strong candidate — but always manage risk, validate configurations, and track official updates closely.


    `,
  },
  test: {
    name: 'Test Token',
    description: 'A test token for demonstrating mock data integration.',
    slug: 'TEST',
    website: 'https://test-token.com',
    twitter: 'https://x.com/testtoken',
    telegram: 'https://t.me/testtoken',
    content: `
      Test Token (TEST) - Mock Data Integration Demo
      
      This is a test token used to demonstrate how mock data integration works in the AI chatbot system. It provides comprehensive information about a fictional cryptocurrency project.
      
      Key Features:
      - Mock Data Integration: Demonstrates how static data can be used when real-time data is unavailable
      - Comprehensive Information: Includes detailed tokenomics, use cases, and technical specifications
      - Educational Purpose: Helps developers understand the system's fallback mechanisms
      
      Technical Specifications:
      - Blockchain: Ethereum
      - Consensus: Proof of Stake
      - Total Supply: 1,000,000,000 TEST
      - Circulating Supply: 500,000,000 TEST
      - Contract Address: 0x1234567890abcdef1234567890abcdef12345678
      
      Use Cases:
      - Testing and Development: Primary use case for system testing
      - Educational: Learning about blockchain technology
      - Demonstration: Showcasing AI capabilities with structured data
      
      Tokenomics:
      - 40% - Public Sale
      - 20% - Team and Advisors
      - 15% - Development Fund
      - 15% - Marketing and Partnerships
      - 10% - Reserve Fund
      
      Recent Developments:
      - Mock data integration completed
      - AI system testing in progress
      - Documentation updated
      - Community feedback collected
      
      Investment Considerations:
      - This is a test token - not for real investment
      - Used for demonstration purposes only
      - No real monetary value
      - Educational and testing tool
    `,
  },
};

export default MOCK_DATA;
