import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

async function testChatWithMockData() {
  console.log('🤖 Testing Chat API with Mock Data');
  console.log('===================================');

  try {
    // Test with MET token (has mock data)
    console.log('\n📝 Testing with MET token (has mock data)...');
    
    const metResponse = await axios.post(`${API_BASE_URL}/api/chat`, {
      user_id: 'test-user-123',
      token_slug: 'met',
      question: 'What is Meteora and how does it work?'
    });

    console.log('✅ MET Response Status:', metResponse.status);
    console.log('📄 MET Response Data:', JSON.stringify(metResponse.data, null, 2));

  } catch (error: any) {
    console.error('❌ MET Test Error:', error.response?.data || error.message);
  }

  try {
    // Test with BTC token (no mock data)
    console.log('\n📝 Testing with BTC token (no mock data)...');
    
    const btcResponse = await axios.post(`${API_BASE_URL}/api/chat`, {
      user_id: 'test-user-123',
      token_slug: 'btc',
      question: 'What is Bitcoin and how does it work?'
    });

    console.log('✅ BTC Response Status:', btcResponse.status);
    console.log('📄 BTC Response Data:', JSON.stringify(btcResponse.data, null, 2));

  } catch (error: any) {
    console.error('❌ BTC Test Error:', error.response?.data || error.message);
  }

  try {
    // Test with ETH token (no mock data)
    console.log('\n📝 Testing with ETH token (no mock data)...');
    
    const ethResponse = await axios.post(`${API_BASE_URL}/api/chat`, {
      user_id: 'test-user-123',
      token_slug: 'eth',
      question: 'What is Ethereum and how does it work?'
    });

    console.log('✅ ETH Response Status:', ethResponse.status);
    console.log('📄 ETH Response Data:', JSON.stringify(ethResponse.data, null, 2));

  } catch (error: any) {
    console.error('❌ ETH Test Error:', error.response?.data || error.message);
  }

  console.log('\n🎯 Chat API test completed!');
}

// Run the test
testChatWithMockData().catch(console.error);
