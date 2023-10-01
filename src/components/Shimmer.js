/* Shimmer.js */
import '../css/Shimmer.css';

const Shimmer = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className='shimmer-container'>
      {arr.map((index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-content">
            <div className="shimmer-line shimmer-line-1"></div>
            <div className="shimmer-line shimmer-line-2"></div>
            <div className="shimmer-line shimmer-line-3"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shimmer;
