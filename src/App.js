// import React from 'react';
// import { Route } from 'react-router-dom';
// import Menu from './components/Menu';
// import RedPage from './pages/RedPage';
// import BluePage from './pages/BluePage';

// const App = () => {
//   return (
//     <div>
//       <Menu />
//       <br />
//       <Route path="/red" component={RedPage} />
//       <Route path="/blue" component={BluePage} />
//     </div>
//   );
// };

// export default App;

import React from 'react';

export default function App() {
  const name = '뤼액트';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
  };

  return <div>{name === '리액트' ? <h1>리액트입니다</h1> : null}</div>;
}
