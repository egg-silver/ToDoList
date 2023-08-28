import React from 'react';

export default function DoneBox({ data, setData, item }) {
  const cancel = (cancelId) => {
    const cancelData = data.map((item) =>
      cancelId === item.id ? { ...item, done: false } : item
    );
    return setData(cancelData);
  };
  const delted = (deltedId) => {
    const deletedData = data
      .filter((item) => item.id !== deltedId)
      .map((val) => val);
    setData(deletedData);
  };
  return (
    <>
      <div className='box' key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <button className='complete' onClick={() => cancel(item.id)}>
          취소
        </button>
        <button className='deleted' onClick={() => delted(item.id)}>
          삭제!
        </button>
      </div>
    </>
  );
}
