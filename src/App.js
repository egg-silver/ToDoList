import { useState } from 'react';
import WorkingBox from './components/WorkingBox';
import DoneBox from './components/DoneBox';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [titleInput, setTitleInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');
  const [id, setId] = useState(1);

  const title = (e) => {
    setTitleInput(e.target.value);
  };
  const body = (e) => {
    setBodyInput(e.target.value);
  };
  const click = () => {
    if (!titleInput && !bodyInput) {
      alert('모든 값을 입력해주세요!');
    }
    const newData = {
      id: id,
      title: titleInput,
      body: bodyInput,
      done: false,
    };
    setId(id + 1);
    setData([...data, newData]);
    setTitleInput('');
    setBodyInput('');
  };

  return (
    <div className='body'>
      <div className='title'>My Todo List</div>

      <div className='inputLayout'>
        <div className='text'>
          제목 :{' '}
          <input
            type='text'
            onChange={title}
            value={titleInput}
            placeholder='  해야할 일을 적어주세요!'
          />
        </div>

        <div className='text'>
          내용 :{' '}
          <input
            type='text'
            onChange={body}
            value={bodyInput}
            placeholder='  세부 계획을 적어주세요!'
          />
        </div>

        <button
          className='add'
          disabled={!titleInput || !bodyInput}
          onClick={click}
        >
          추가하기
        </button>
      </div>

      <div>
        <br />
        <h3>Working...🔥</h3>
        {data.length === 0 ? (
          <div className='zero'>아직 계획이 없어요!</div>
        ) : (
          <div className='boxLayout'>
            {data.map((item, index) =>
              item.done === false ? (
                <WorkingBox data={data} setData={setData} item={item} />
              ) : null
            )}
          </div>
        )}
      </div>

      <div>
        <h3>Done!!❤️‍🔥</h3>
        {data.length === 0 ? (
          <div className='zero'>아직 완료한 일이 없어요!</div>
        ) : (
          <div className='boxLayout'>
            {data.map((item, index) =>
              item.done === true ? (
                <DoneBox data={data} setData={setData} item={item} />
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
