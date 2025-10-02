import MOCK_DATA from '../src/modules/mocks/data';

console.log('🔍 Testing Mock Data Integration');
console.log('================================');

// Test available tokens
const availableTokens = Object.keys(MOCK_DATA);
console.log(`📊 Available tokens: ${availableTokens.join(', ')}`);

// Test MET token data
const metData = MOCK_DATA['met'];
if (metData) {
  console.log('\n✅ MET Token Data:');
  console.log(`Name: ${metData.name}`);
  console.log(`Description: ${metData.description}`);
  console.log(`Symbol: ${metData.slug}`);
  console.log(`Website: ${metData.website}`);
  console.log(`Content length: ${metData.content.length} characters`);
  console.log(`Content preview: ${metData.content.substring(0, 200)}...`);
} else {
  console.log('❌ MET token data not found');
}

// Test non-existent token
const btcData = (MOCK_DATA as any)['btc'];
if (btcData) {
  console.log('\n✅ BTC Token Data:');
  console.log(`Name: ${btcData.name}`);
  console.log(`Description: ${btcData.description}`);
  console.log(`Symbol: ${btcData.slug}`);
  console.log(`Content length: ${btcData.content.length} characters`);
} else {
  console.log('❌ BTC token data not found (expected)');
}

// Test non-existent token
const ethData = (MOCK_DATA as any)['eth'];
if (ethData) {
  console.log('\n✅ ETH Token Data:');
  console.log(`Name: ${ethData.name}`);
  console.log(`Description: ${ethData.description}`);
  console.log(`Symbol: ${ethData.slug}`);
  console.log(`Content length: ${ethData.content.length} characters`);
} else {
  console.log('❌ ETH token data not found (expected)');
}

console.log('\n🎯 Mock data integration test completed!');
