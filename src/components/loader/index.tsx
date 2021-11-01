import './style.css';

const Loader = () => {
  const text = 'Loading...';
  const rings = 2;
  const ringSectors = 30;

  return (
    <section className='w-screen h-screen flex items-center justify-center loader-container absolute'>
      <div className='preloader'>
        {Array.from({ length: rings }, (_, index) => index + 1).map((p) => (
          <div key={p} className='preloader__ring'>
            {Array.from({ length: ringSectors }, (_, index) => index + 1).map(
              (s, i) => (
                <div
                  key={s}
                  className='preloader__sector'
                  style={
                    s !== 1
                      ? {
                          transform: `rotateY(${
                            12 * (s - 1)
                          }deg) translateZ(7rem)`,
                        }
                      : {}
                  }
                >
                  {text[i] || ''}
                </div>
              )
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Loader;
