
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/sound/:name', (req, res) => {
    const {name} = req.params
    if(name=="dog"){
        res.send("<img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MTlfMjk0%2FMDAxNjI5MzYxNTA2MjM4.mKGKHNqspjtRblXWp-NLggUVV3PqlYDZiETul8xAbnAg.6EhnjnXs3E8AsJZQ_zcXBneDdUx-9IV-2vlaUDOw-D8g.JPEG.yeoldo_dal%2F2.jpg&type=sc960_832'>")
    }else if(name=="cat"){
        res.send("<img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA1MTFfMjIy%2FMDAxNTg5MTkwMzkwNTM3.3mYvXDZJH7Hjd_asgdbXhc6AVDRByCPzyh0ChYAkoYAg.bBVsvo76gLA_xKDtpZqZTNBpxr20Vr3cLaEVGA2oMKkg.JPEG%2FexternalFile.jpg&type=sc960_832'>")
    }else if(name=="pig"){
        res.send("<img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMjhfMTE2%2FMDAxNjA2NTQyMTIyMDA4.3OrdHKmT45aW8Oor60c3QUfztAo9hIzOL5ZylZurAPkg.cCOBdDLzrGKArBkxFD-JDOWVxs1WqAqZIC8aBu_UtxMg.JPEG.zooiddqd%2F20201128%25A3%25DF142018.jpg&type=sc960_832'>")
    }else{
        res.send("<img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA1MThfNzAg%2FMDAxNTg5ODA3ODMzMjAy.H3s_rjSDCZyZv7Z_ugmvMXyGNTSLaf3WOkH03hsWn0Eg.yrxfWa9GWr2hOdxgDsx40cJ12YBR1xOyRn_NclApUoAg.PNG%2F%25B8%25CA_%25B0%25A1%25B8%25AE%25B0%25D4%25BF%25EB%25BD%25BA%25B8%25F4.png&type=a340'>")
    }

})

app.get('/', (req, res) => {
    res.send('/picture/dog  /picture/cat /picture/pig')
})
  

app.listen(port, () => 
  console.log(`Example app listening on port ${port}`)
)
