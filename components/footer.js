import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      align="center"
      opacity={0.4}
      fontSize="sm"
      fontFamily='"JetBrains Mono", sans-serif'
      fontWeight={'semibold'}
    >
      &copy; {new Date().getFullYear()} Tauqeer Nasir. All Rights Reserved.
    </Box>
  )
}

export default Footer
