import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import GroupImg from '../../assets/GroupPhoto.png'
import Image from '../Image'

const BackedBySection = () => {
    return (
        <Stack sx={{ paddingX: '5%', paddingY: '2%', mt: '1rem' }}>
            <Stack direction='column' alignItems='center' position='relative' gap={4}>
                <Typography sx={{ textAlign: 'center', color: '#581781', fontWeight: '600', fontSize: { xs: '40px', md: '60px' } }}>Backed By 100xVC
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Typography sx={{ color: '#581781', fontWeight: '600', fontSize: '24px', textAlign: 'center' }}>
                        Ribin Secures Funding from 100X.VC
                    </Typography>
                    <Typography sx={{ textAlign: 'center', color: '#B2279C', fontWeight: '600', fontSize: { xs: '110%', md: '150%' }, width: '80%' }}>
                        Ribin has secured funding from 100X.VC, recognizing our innovative approach and potential to revolutionize the gifting industry in India. This marks a significant milestone in our journey and validates our innovative approach to gifting.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Typography sx={{ color: '#581781', fontWeight: '600', fontSize: '24px', textAlign: 'center' }}>
                        About 100X.VC:
                    </Typography>
                    <Typography sx={{ textAlign: 'center', color: '#B2279C', fontWeight: '600', fontSize: { xs: '110%', md: '150%' }, width: '80%' }}>
                        Ribin has secured funding from 100X.VC, recognizing our innovative approach and potential to revolutionize the gifting industry in India. This marks a significant milestone in our journey and validates our innovative approach to gifting.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Image src={GroupImg} alt='image' sx={{ width: '80%' }} />
                </Box>
                <Button variant='contained' sx={{
                    textTransform: 'capitalize', fontWeight: '500', fontSize: { xs: '14px', md: '1.2vw' }, borderRadius: '50px', bgcolor: '#581781', color: 'white', px: '3%',
                    '&:hover': { bgcolor: '#DAA0FF' }
                }}>
                    Know more
                </Button>
            </Stack>
        </Stack>
    )
}

export default BackedBySection
