import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

interface Props{
    basename: string;
    children: React.ReactNode;
    history: any;
}

const HistoryRouter : React.FC<Props> = ({basename, children, history}) => {
    let [state, setState] = useState({
        action: history.action,
        location: history.location,
    });

    useLayoutEffect(() => history.listen(setState), [history]);

    return (
        <Router
            basename={basename}
            children={children}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
}

export default HistoryRouter;