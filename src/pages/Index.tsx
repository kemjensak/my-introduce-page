
import React from 'react';

const Index = () => {
  const copyDiscord = () => {
    navigator.clipboard.writeText('jikim#1234').then(() => {
      alert('Discord 태그가 복사되었습니다! 📋');
    }).catch(() => {
      alert('Discord 태그: jikim#1234');
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-2xl mx-auto px-5 py-8">
        {/* Greeting Section */}
        <section className="bg-white/80 rounded-lg shadow-lg p-8 mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            👋 안녕하세요! 김진석입니다.
          </h1>
          <p className="text-lg text-gray-700 mb-3">
            개발과 음악, 그리고 좋은 장비를 사랑하는 사람입니다.
          </p>
          <p className="text-lg text-gray-700">
            30초면 충분히 저를 알아가실 수 있을 거예요!
          </p>
        </section>

        {/* About Section */}
        <section className="bg-white/80 rounded-lg shadow-lg p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-800 flex items-center gap-2">
            🎯 About Me
          </h2>
          <p className="text-gray-600 mb-4">저는 이런 사람이에요</p>
          <div className="flex flex-wrap gap-3">
            {[
              'PC 덕후',
              'HIFI 애호가', 
              '드라이브 러버',
              '게임 매니아',
              '음악 감상가',
              '카페 투어러',
              '기술 탐구자'
            ].map((keyword, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-medium text-sm hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                {keyword}
              </span>
            ))}
          </div>
        </section>

        {/* My Setup Section */}
        <section className="bg-white/80 rounded-lg shadow-lg p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-800 flex items-center gap-2">
            ⚙️ My Setup
          </h2>
          <p className="text-gray-600 mb-4">현재 사용하고 있는 장비들입니다</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {[
                  ['CPU', 'Intel Core i7-13700KF'],
                  ['GPU', 'NVIDIA RTX 3080 Ti'],
                  ['Monitor', 'MSI MAG281URF (4K / 144Hz)'],
                  ['Audio', 'Sennheiser IE900 · HD6xx\nPreSonus Eris 3.5 · FiiO K11'],
                  ['Mic', 'PreSonus Revelator Dynamic'],
                  ['Keyboard', 'Mchose Ace 68 Pro (자성 스위치)'],
                  ['Mouse', 'Logitech G Pro X Superlight']
                ].map(([category, model], index) => (
                  <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                    <th className="bg-gradient-to-r from-gray-50 to-gray-100 p-3 text-left font-semibold text-gray-800 border-b border-gray-200 w-1/3">
                      {category}
                    </th>
                    <td className="p-3 text-gray-600 border-b border-gray-200 whitespace-pre-line">
                      {model}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="bg-white/80 rounded-lg shadow-lg p-8 mb-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-800 flex items-center gap-2">
            🎮 Hobbies & Interests
          </h2>
          <p className="text-gray-600 mb-4">이런 것들을 좋아해요</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '🎮', title: '게임', desc: '다양한 장르의 게임을 즐겨요' },
              { icon: '🎵', title: '음악 감상', desc: '고음질로 듣는 음악이 최고죠' },
              { icon: '🚗', title: '드라이브', desc: '좋은 음악과 함께하는 드라이브' },
              { icon: '☕', title: '카페 투어', desc: '새로운 카페 발견하는 재미' }
            ].map((hobby, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-lg text-center hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-3xl block mb-2">{hobby.icon}</span>
                <div className="font-semibold text-gray-800 mb-1">{hobby.title}</div>
                <div className="text-sm text-gray-600">{hobby.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white/80 rounded-lg shadow-lg p-8 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-gray-800 flex items-center gap-2">
            📞 Contact
          </h2>
          <p className="text-gray-600 mb-4">여기서 저를 찾을 수 있어요</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://github.com/jinseokkim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span>🐙</span>
              <span>GitHub</span>
            </a>
            <button 
              onClick={copyDiscord}
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span>💬</span>
              <span>Discord: jikim#1234</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
