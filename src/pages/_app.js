import "/src/assets/css/Custom.css";
import "/src/assets/css/Plugins.css";
import "/src/assets/css/Prismjs.css";
import "/src/assets/css/Styles.css";
import Script from 'next/script'

function Relcanonical({ Component, pageProps }) {
  return (
    <>
      <Script src="/assets/js/Plugins.js"></Script>
      <Script src="/assets/js/Prismjs.js"></Script>
      <Script src="/assets/js/Scripts.js"></Script>
      <Script src="/assets/js/Theme.js"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default Relcanonical;
