export default function handler(req, res) {
    const header = req.headers
    const method = req.method
    const post = req.body
    // console.log(req)
    res.status(404).json({ 
        Method: method,
        Header: header,
        Body: post,
    })
}