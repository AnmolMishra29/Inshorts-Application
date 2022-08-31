import { Card,CardContent ,Grid ,Typography ,styled} from "@mui/material";

const Image =styled("Img") ({
    height: 268,
    width:'88%',
    objectFit: 'cover',
    borderRadius: 8
})

const Container =styled(Card)`
     margin-bottom:20px;
     box-shadow: 0 2px 5px 0 rgb(0 0 0 /16%), 0 2px 10px 0 rgb(0 0 0/12%);
`
const Component = styled(CardContent)`
     padding:8px;
     padding-bottom: 4px !important;
`
const Text = styled(Typography)`
     font-weight 300;
     font-size:22px;
     line-height: 27px;
`
const RightContainer =styled(Grid)(({ theme }) => ({
    margin: '5px 0 0 -25px',
    display: 'flex',
    flexDirection:'column',
    [theme.breakpoints.between('sm', 'lg')]: {
        padding: '0 5px'
     },
     [theme.breakpoints.down('sm')]: {
        margin: '5px 0'
     }
}));
      

const Author =styled(Typography)`
      margin: #808290;
      font-size: 12px;
      line-height: 22px;
`
const Description =styled(Typography)`
      line-height: 22px;
      margin-top:5px;
      font-weight 300;
`
const Publisher =styled(Typography)`
      font-size: 14px;
      margin-top: auto;
      margin-bottom: 10px;
`


const Article = ({data})=> {
    return(
         <Container>
             <Component>
                 <Grid container>
                      <Grid lg={5} sm={5} xs={12} item>
                          <Image src={data.url}/>
                      </Grid>
                      <RightContainer lg={7} md={7} sm={7} xs={12} item>
                           <Text>{data.title}</Text>
                           <Author>
                                  <b>short</b> by {data.author} / {new Date(data.timestamp).toDateString()}
                           </Author>
                           <Description>{data.description}</Description>
                           <Publisher>
                                 read more at &nbsp;
                                 <a style={{textDecoration: 'none' ,color: '#000'}}href={data.link} target="_blank"><b>{data.publisher}</b></a>
                            </Publisher>
                      </RightContainer>
                 </Grid>
             </Component>
         </Container>
    )
}

export default Article;