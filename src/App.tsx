import { FC } from 'react'
import Header from './components/Header/Header';
import CommentList from './components/CommentList/CommentList';
import FontLoader from './helmet/FontLoader';
import { AppContainer } from './App.style';

const App: FC = () => {
    return (
        <AppContainer>
            <FontLoader />
            <Header />
            <CommentList />
        </AppContainer>
    );
};

export default App;
