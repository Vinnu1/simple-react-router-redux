export const FETCH = 'FETCH'; //what does this do? - just a name of action used in switch case in reducer
export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(items =>
            dispatch({
                type: FETCH,
                payload: items
            })
        )
}