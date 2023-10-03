import React from 'react'
import Image from './Image'
import { Box, Button, Stack, Typography } from '@mui/material'
import Phone from '../assets/PhoneTrending.png'
import DiscountImg from '../assets/Discount.png'
import HandpickedImg from '../assets/Handpicked.png'
import TopUpImg from '../assets/TopUp.png'
import PersonalizedImg from '../assets/Personalized.png'
import ConvenientImg from '../assets/Convenient.png'
import FiftyPlusImg from '../assets/FiftyPlus.png'
import Company1 from '../assets/Company1.png'
import Company2 from '../assets/Company2.png'
import Company3 from '../assets/Company3.png'
import Company4 from '../assets/Company4.png'
import Company5 from '../assets/Company5.png'
import Company6 from '../assets/Company6.png'
import Company7 from '../assets/Company7.png'
import Company8 from '../assets/Company8.png'
import Company9 from '../assets/Company9.png'
import Company10 from '../assets/Company10.png'
import Company11 from '../assets/Company11.png'
import Company12 from '../assets/Company12.png'
import Company13 from '../assets/Company13.png'

const ThirdSection = () => {
    return (
        <Stack sx={{ paddingX: '5%', paddingY: '2%', position: 'relative', mt: '5rem' }}>
            <Stack direction={{ xs: 'column', md: 'row' }} rowGap={3}>
                <Box sx={{ width: { xs: '100%', md: '45%' }, display: 'flex',justifyContent: 'center' }}>
                    <Image src={Phone} alt='Phone' sx={{ width: '80%' }} />
                </Box>
                <Box sx={{ width: { xs: '100%', md: '55%' }, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography sx={{ color: '#581781', fontWeight: '700', fontSize: { xs: '38px', md: '42px' } }}>Benefits of Ribin App</Typography>
                        <Typography sx={{ fontWeight: '700', fontSize: '22px', width: { xs: '100%', md: '35vw' } }}>Using Ribin is simple. It's as easy as select, pay, and share the joy!</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
                        rowGap: '2rem',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexBasis: { xs: '100%', sm: '50%', md: '33.33333%' },
                        }}>
                            <Box sx={{
                                bgcolor: '#581781',
                                borderRadius: '50%',
                                height: '3rem',
                                width: '3rem',
                                padding: '1rem',
                                marginRight: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image src={DiscountImg} alt='discount' sx={{ width: '20px' }} />
                            </Box>
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '100%',
                                width: { xs: '50%', md: '9vw' },
                            }}>Great Discounts</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexBasis: { xs: '100%', sm: '50%', md: '33.33333%' },
                        }}>
                            <Box sx={{
                                bgcolor: '#581781',
                                borderRadius: '50%',
                                height: '3rem',
                                width: '3rem',
                                padding: '1rem',
                                marginRight: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image src={HandpickedImg} alt='discount' sx={{ width: '25px' }} />
                            </Box>
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '100%',
                                width: { xs: '50%', md: '9vw' },
                            }}>Handpicked Experiences</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexBasis: { xs: '100%', sm: '50%', md: '33.33333%' },
                        }}>
                            <Box sx={{
                                bgcolor: '#581781',
                                borderRadius: '50%',
                                height: '3rem',
                                width: '3rem',
                                padding: '1rem',
                                marginRight: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image src={TopUpImg} alt='discount' sx={{ width: '20px' }} />
                            </Box>
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '100%',
                                width: { xs: '50%', md: '9vw' },
                            }}>Top-Up Existing Gift card*</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexBasis: { xs: '100%', sm: '50%', md: '33.33333%' },
                        }}>
                            <Box sx={{
                                bgcolor: '#581781',
                                borderRadius: '50%',
                                height: '3rem',
                                width: '3rem',
                                padding: '1rem',
                                marginRight: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image src={PersonalizedImg} alt='discount' sx={{ width: '20px' }} />
                            </Box>
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '100%',
                                width: { xs: '50%', md: '9vw' },
                            }}>Personalized & Thoughtful</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexBasis: { xs: '100%', sm: '50%', md: '33.33333%' },
                        }}>
                            <Box sx={{
                                bgcolor: '#581781',
                                borderRadius: '50%',
                                height: '3rem',
                                width: '3rem',
                                padding: '1rem',
                                marginRight: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image src={ConvenientImg} alt='discount' sx={{ width: '20px' }} />
                            </Box>
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '100%',
                                width: { xs: '50%', md: '9vw' },
                            }}>Convenient & Easy</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexBasis: { xs: '100%', sm: '50%', md: '33.33333%' },
                        }}>
                            <Box sx={{
                                bgcolor: '#581781',
                                borderRadius: '50%',
                                height: '3rem',
                                width: '3rem',
                                padding: '1rem',
                                marginRight: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image src={FiftyPlusImg} alt='discount' sx={{ width: '24px' }} />
                            </Box>
                            <Typography sx={{
                                fontWeight: '500',
                                fontSize: '100%',
                                width: { xs: '50%', md: '9vw' },
                            }}>50+ Experiences</Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Button variant='contained' sx={{
                            textTransform: 'capitalize', fontWeight: '500', fontSize: { xs: '12px', md: '1.2vw' }, borderRadius: '50px', bgcolor: '#581781', color: 'white',
                            '&:hover': { bgcolor: '#DAA0FF' }
                        }}>Download App</Button>
                    </Box>
                </Box>
            </Stack>
            <Box sx={{ display: 'flex', bgcolor: '#581781', position: 'absolute', left: 0, bottom: { xs: -140, md: -10 }, width: '100%', paddingY: '10px', overflow: 'hidden' }}>
                <div className="marquee-container">
                    <Image src={Company1} alt='companyLogo' />
                    <Image src={Company2} alt='companyLogo' />
                    <Image src={Company3} alt='companyLogo' />
                    <Image src={Company4} alt='companyLogo' />
                    <Image src={Company5} alt='companyLogo' />
                    <Image src={Company6} alt='companyLogo' />
                    <Image src={Company7} alt='companyLogo' />
                    <Image src={Company8} alt='companyLogo' />
                    <Image src={Company9} alt='companyLogo' />
                    <Image src={Company10} alt='companyLogo' />
                    <Image src={Company11} alt='companyLogo' />
                    <Image src={Company12} alt='companyLogo' />
                    <Image src={Company13} alt='companyLogo' />
                    <Image src={Company1} alt='companyLogo' />
                    <Image src={Company2} alt='companyLogo' />
                    <Image src={Company3} alt='companyLogo' />
                    <Image src={Company4} alt='companyLogo' />
                    <Image src={Company5} alt='companyLogo' />
                    <Image src={Company6} alt='companyLogo' />
                    <Image src={Company7} alt='companyLogo' />
                    <Image src={Company8} alt='companyLogo' />
                    <Image src={Company9} alt='companyLogo' />
                    <Image src={Company10} alt='companyLogo' />
                    <Image src={Company11} alt='companyLogo' />
                    <Image src={Company12} alt='companyLogo' />
                    <Image src={Company13} alt='companyLogo' />
                </div>
            </Box>
        </Stack>
    )
}

export default ThirdSection
