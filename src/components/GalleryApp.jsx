import { useState } from 'react';
import Scene3D from './Scene3D';
import { carpets } from '../data/carpets';

export default function GalleryApp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCarpet = carpets[activeIndex];

  return (
    <div className="gallery-container">
      {/* بخش بالایی: صحنه سه‌بعدی و پنل اطلاعات */}
      <div className="gallery-layout">
        <div className="gallery-canvas">
          <Scene3D imageUrl={activeCarpet.image} />
        </div>

        <aside className="info-panel">
          <span className="badge">فرش نفیس</span>
          <h2>{activeCarpet.title}</h2>
          <p className="origin">{activeCarpet.origin}</p>
          
          <div className="divider"></div>
          
          <p className="story">{activeCarpet.story}</p>

          <div className="specs">
            <div className="spec">
              <span className="spec-label">جنس</span>
              <span className="spec-value">{activeCarpet.specs.material}</span>
            </div>
            <div className="spec">
              <span className="spec-label">تعداد گره</span>
              <span className="spec-value">{activeCarpet.specs.knots}</span>
            </div>
            <div className="spec">
              <span className="spec-label">ابعاد</span>
              <span className="spec-value">{activeCarpet.specs.size}</span>
            </div>
          </div>

          <button className="cta-button">
            مشاهده جزئیات و داستان کامل
          </button>
        </aside>
      </div>

      {/* بخش پایینی: نوار عکس‌ها (Thumbnails) */}
      <div className="thumbnail-strip">
        {carpets.map((carpet, index) => (
          <button
            key={carpet.id}
            onClick={() => setActiveIndex(index)}
            className={`thumbnail ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={carpet.image} alt={carpet.title} />
            <span>{carpet.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}