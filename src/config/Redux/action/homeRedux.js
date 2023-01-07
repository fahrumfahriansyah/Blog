import axios from 'axios'

const homeActionRedux = (setLoading, setError, num) => {

    return (dispacth) => {
        axios
            .get(`http://localhost:4000/v1/Blog/post?page=${num}& toPage=${num} `)
            .then((result) => {
                const data = result.data;
                setLoading(false);
                // dispacthNum()
                dispacth({ type: "pages", payload: { page: data.page, toPage: Math.ceil(data.dataAll / data.toPage) } })
                dispacth({ type: "getAll", payload: data.data })
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }
}

export default homeActionRedux