import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/spinner/Loader';

const Post = lazy(() => import('./components/posts/Post'));
const User = lazy(() => import('./components/users/User'));
const Error = lazy(() => import('./components/errors/Error'));

const Routing = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path='/' element={<User />} />
                <Route path='/:userName/post/:userId' element={<Post />} />
                <Route path='*' element={<Error title="Page not found" body="Uh oh, we can't seem to find the page you're looking for. Try going back to the dashboard" />} />
            </Routes>
        </Suspense>
    )
}

export default Routing;