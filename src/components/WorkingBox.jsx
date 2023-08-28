import React from 'react';

export default function WorkingBox({ data, setData, item }) {
  const checked = (checkedId) => {
    const doneData = data.map((item) => {
      if (checkedId === item.id) {
        return { ...item, done: true };
      }
      return item;
    });
    setData(doneData);
  };
  const delted = (deltedId) => {
    const deletedData = data
      .filter((item) => item.id !== deltedId)
      .map((val) => val);
    setData(deletedData);
  };
  return (
    <div className='box' key={item.id}>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
      <button className='complete' onClick={() => checked(item.id)}>
        완료!
      </button>
      <button className='deleted' onClick={() => delted(item.id)}>
        삭제!
      </button>
    </div>
  );
}
