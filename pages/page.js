import Layout from '../comps/Layout';
import { withRedux } from '../redux';
import { useSelector, useDispatch } from 'react-redux'

const Index = props => {
    const foo = useSelector(state => state.foo);
    const dispatch = useDispatch();
    const test = () => dispatch({
        type: 'FOO',
        payload: '👌 damn right'
    });

    return(
        <Layout>
            <button onClick={test}>Click</button>
            <p>{foo}</p>
            <style jsx>{`
                button {
                    margin-top: 15px;
                }
            `}</style>
        </Layout>
    );
}

Index.getInitialProps = ({ reduxStore }) => {
    const { dispatch } = reduxStore;
    dispatch({
        type: 'FOO',
        payload: 'This is the initial state'
    });
};

export default withRedux(Index);