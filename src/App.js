import React from 'react';
import './index.scss';

const Modal = ({ open, setOpen, children }) => (
  <div className={`overlay animated ${open ? 'show' : ''}`}>
    <div className="modal">
      <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setOpen(false)}>
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      {children}
    </div>
  </div>
)

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpen(true)}>✨ Открыть окно</button>
      {/* {open && (
        < div className="overlay">
          <div className="modal">
            <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setOpen(false)}>
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
          </div>
        </div>
      )} */}
      {/* {open && <Modal open={open} setOpen={setOpen} />} */}
      <Modal open={open} setOpen={setOpen}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        <h3>Это попапус</h3>
      </Modal>
    </div>
  );
}

export default App;
