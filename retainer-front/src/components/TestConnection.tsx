import React, { useState } from 'react';
import { testService } from '../services/testService';

const TestConnection: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const testGet = async () => {
    try {
      setLoading(true);
      const result = await testService.getHello();
      setMessage(result.message);
    } catch (error) {
      setMessage('GET 요청 실패: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const testPost = async () => {
    try {
      setLoading(true);
      const result = await testService.postEcho({ 
        test: 'data', 
        from: 'frontend' 
      });
      setMessage('POST 성공: ' + JSON.stringify(result));
    } catch (error) {
      setMessage('POST 요청 실패: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>백엔드 연결 테스트</h2>
      <button onClick={testGet} disabled={loading}>
        GET 테스트
      </button>
      <button onClick={testPost} disabled={loading}>
        POST 테스트
      </button>
      <div>
        <h3>결과:</h3>
        <p>{loading ? '로딩 중...' : message}</p>
      </div>
    </div>
  );
};

export default TestConnection;