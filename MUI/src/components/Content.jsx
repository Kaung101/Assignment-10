import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
export default function Content(){
    return(
        <Grid container>

                <Grid item direction={'Column'}>
                    <Box>
                    <Typography variant='h4' mt={3}>
                        Welcome to My Website
                    </Typography>
                    <Typography my={3} variant='body1'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet reiciendis exercitationem accusamus esse impedit ipsum officiis obcaecati explicabo, cumque, odit nostrum? Ab nisi fugit voluptates esse fugiat suscipit doloribus ea?
                        Ad quam voluptates incidunt recusandae, amet tempore voluptate a doloremque consequatur iusto voluptatem possimus, vel voluptas. Dignissimos in molestiae unde repellat, quae aliquam. Voluptate autem voluptatibus, maiores officiis illum obcaecati!
                    </Typography>
                    <Typography variant='body1' mb={4}>
                        quam voluptates incidunt recusandae, amet tempore voluptate a doloremque consequatur iusto voluptatem possimus, vel voluptas. Dignissimos in molestiae unde repellat, quae aliquam. Voluptate autem voluptatibus, maiores officiis illum obcaecati!
                        Doloribus odio consequatur perspiciatisodit sapiente consequuntur necessitatibus ab optio id ratione est quibusdam possimus vel! Neque alias repudiandae fugiat cupiditate corporis, sint ex eius exercitationem illum officia ut!
                    </Typography>
                    </Box>

                <Grid container>
                    <Grid item xs>
                    {/* creating card */}
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="coconut.jpg"
                            title="coconut tree"
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Card Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequuntur, dolore aliquam ipsa aperiam enim corporis animi laudantium? Hic corrupti eius repudiandae inventore sequi enim accusantium quia voluptate porro ab.
                            Officia usdam recusandae totam magnam quidem placeat nostrum saepe? Nisi distinctio nobis tenetur libero praesentium ipsa tempora!
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs>
                    {/* creating card */}
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="coconut.jpg"
                            title="coconut tree"
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Card Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequuntur, dolore aliquam ipsa aperiam enim corporis animi laudantium? Hic corrupti eius repudiandae inventore sequi enim accusantium quia voluptate porro ab.
                            Officia usdam recusandae totam magnam quidem placeat nostrum saepe? Nisi distinctio nobis tenetur libero praesentium ipsa tempora!
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs>
                    {/* creating card */}
                    <Card sx={{ maxWidth: 300 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="coconut.jpg"
                            title="coconut tree"
                            />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Card Title
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consequuntur, dolore aliquam ipsa aperiam enim corporis animi laudantium? Hic corrupti eius repudiandae inventore sequi enim accusantium quia voluptate porro ab.
                            Officia usdam recusandae totam magnam quidem placeat nostrum saepe? Nisi distinctio nobis tenetur libero praesentium ipsa tempora!
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}