import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

async function testStreamingAPI() {
  console.log('🔄 Testing streaming API...');
  
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/chat/stream`,
      {
        user_id: 'test_user_123',
        token_slug: 'xpl',
        question: 'What is XPL token?'
      },
      {
        responseType: 'stream',
        headers: {
          'Accept': 'text/event-stream',
          'Cache-Control': 'no-cache',
        }
      }
    );

    console.log('✅ Streaming response received');
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);

    // Handle streaming data
    response.data.on('data', (chunk: Buffer) => {
      const data = chunk.toString();
      console.log('📦 Chunk received:', data);
      
      // Parse Server-Sent Events
      const lines = data.split('\n');
      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const jsonData = line.slice(6);
          if (jsonData !== '[DONE]') {
            try {
              const parsed = JSON.parse(jsonData);
              console.log('📋 Parsed data:', parsed);
            } catch (error) {
              console.log('🔴 Parse error:', error);
            }
          }
        }
      }
    });

    response.data.on('end', () => {
      console.log('✅ Stream ended');
    });

    response.data.on('error', (error: Error) => {
      console.error('🔴 Stream error:', error);
    });

  } catch (error) {
    console.error('🔴 Request error:', error);
  }
}

// Run test
testStreamingAPI();
