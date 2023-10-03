import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Image from '../Image'
import Team1 from '../../assets/TeamImg1.png'
import Team2 from '../../assets/TeamImg2.png'
import Team3 from '../../assets/TeamImg3.png'
import Team4 from '../../assets/TeamImg4.png'
import Team5 from '../../assets/TeamImg5.png'
import Team6 from '../../assets/TeamImg6.png'
import Team7 from '../../assets/TeamImg7.png'
import Team8 from '../../assets/TeamImg8.png'
import Team9 from '../../assets/TeamImg9.png'
import HoverImg1 from '../../assets/HoverImg1.png'
import HoverImg2 from '../../assets/HoverImg2.png'
import HoverImg3 from '../../assets/HoverImg3.png'
import HoverImg4 from '../../assets/HoverImg4.png'
import HoverImg5 from '../../assets/HoverImg5.png'
import HoverImg6 from '../../assets/HoverImg6.png'
import HoverImg7 from '../../assets/HoverImg7.png'
import HoverImg8 from '../../assets/HoverImg8.png'
import HoverImg9 from '../../assets/HoverImg9.png'



const TeamSection = () => {
    return (
        <Stack sx={{ paddingX: '5%', paddingY: '2%', mt: { xs: '9rem', md: '1rem' } }}>
            <Stack direction='column' alignItems='center' justifyContent='center' gap={{ xs: 1, md: 5 }}>
                <Typography sx={{ color: '#581781', fontWeight: '600', fontSize: { xs: '40px', md: '60px' } }}>Team</Typography>
                <Typography sx={{ textAlign: { xs: 'justify', md: 'center' }, color: '#B2279C', fontWeight: '600', fontSize: { xs: '110%', md: '150%' }, width: { xs: '90%', md: '80%' } }}>
                    Ribin is an innovative experience gifting app that aims to transform the traditional way of gifting. Ribin allows users to gift their loved ones a memorable experience in the form of a customized gift card- all from one app.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mt: '1rem' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center',position: 'relative' }}>
                        <Image src={Team1} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, display: 'block', zIndex: 1,
                                '&:hover': { zIndex: 0 }
                            }} />
                        <Image src={HoverImg1} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, position: 'absolute', zIndex: 0,
                                '&:hover': { zIndex: 1 }
                            }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                        <Image src={Team2} alt='image' sx={{
                            width: { xs: '90%', sm: '320px' }, display: 'block', zIndex: 1,
                            '&:hover': { zIndex: 0 }
                        }} />
                        <Image src={HoverImg2} alt='img' sx={{
                            width: { xs: '90%', sm: '320px' }, position: 'absolute', zIndex: 0,
                            '&:hover': { zIndex: 1 }
                        }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center',position: 'relative' }}>
                        <Image src={Team3} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, display: 'block', zIndex: 1,
                                '&:hover': { zIndex: 0 }
                            }} />
                        <Image src={HoverImg3} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, position: 'absolute', zIndex: 0,
                                '&:hover': { zIndex: 1 }
                            }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center',position: 'relative' }}>
                        <Image src={Team4} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, display: 'block', zIndex: 1,
                                '&:hover': { zIndex: 0 }
                            }} />
                        <Image src={HoverImg4} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, position: 'absolute', zIndex: 0,
                                '&:hover': { zIndex: 1 }
                            }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center',position: 'relative' }}>
                        <Image src={Team5} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, display: 'block', zIndex: 1,
                                '&:hover': { zIndex: 0 }
                            }} />
                        <Image src={HoverImg5} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, position: 'absolute', zIndex: 0,
                                '&:hover': { zIndex: 1 }
                            }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center',position: 'relative' }}>
                        <Image src={Team6} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, display: 'block', zIndex: 1,
                                '&:hover': { zIndex: 0 }
                            }} />
                        <Image src={HoverImg6} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, position: 'absolute', zIndex: 0,
                                '&:hover': { zIndex: 1 }
                            }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center',position: 'relative' }}>
                        <Image src={Team7} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, display: 'block', zIndex: 1,
                                '&:hover': { zIndex: 0 }
                            }} />
                        <Image src={HoverImg7} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, position: 'absolute', zIndex: 0,
                                '&:hover': { zIndex: 1 }
                            }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center',position: 'relative' }}>
                        <Image src={Team8} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, display: 'block', zIndex: 1,
                                '&:hover': { zIndex: 0 }
                            }} />
                        <Image src={HoverImg8} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, position: 'absolute', zIndex: 0,
                                '&:hover': { zIndex: 1 }
                            }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center',position: 'relative' }}>
                        <Image src={Team9} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, display: 'block', zIndex: 1,
                                '&:hover': { zIndex: 0 }
                            }} />
                        <Image src={HoverImg9} alt='image'
                            sx={{
                                width: { xs: '90%', sm: '320px' }, position: 'absolute', zIndex: 0,
                                '&:hover': { zIndex: 1 }
                            }} />
                    </Box>
                </Box>
            </Stack>
        </Stack>
    )
}

export default TeamSection
