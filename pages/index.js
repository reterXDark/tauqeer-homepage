import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Divider,
  Center
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoFirebase,
  IoLogoFacebook,
  IoLogoPinterest,
  IoLogoCodepen,
  IoLogoClosedCaptioning
} from 'react-icons/io5'
import { GrGraphQl, GrMysql } from 'react-icons/gr'
import { SiNetlify, SiRedux, SiSemanticuireact } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
import { useEffect } from 'react'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const formatDateRange = (startDate, endDate) => {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())
  const duration = months <= 0 ? 1 : months
  const formattedStart = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  }).format(start)
  const formattedEnd = endDate
    ? new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric'
      }).format(end)
    : 'Present'
  return `${formattedStart} - ${formattedEnd} • ${
    duration > 12
      ? `${Math.round((duration + 1) / 12)} Years`
      : `${duration + 1} ${duration > 1 ? 'Mos' : 'Month'}`
  }`
}

var startDate1 = new Date('2021-06-01')
var endDate1 = new Date('2021-10-31')

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        fontFamily='"JetBrains Mono", sans-serif'
        css={{ backdropFilter: 'blur(10px)' }}
        mt={10}
      >
        <Box flexGrow={1}>
          <Heading as="h1" variant="page-title" fontWeight={'black'}>
            Tauqeer Nasir
          </Heading>
          <Heading
            as="h2"
            color={'GrayText'}
            variant="page-title"
            fontWeight={'light'}
            fontSize={20}
          >
            Full Stack Engineer
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            // borderColor="whiteAlpha.800"
            // borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            mt={5}
          >
            <ProfileImage
              src="/images/tauqeer.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Introduction
        </Heading>
        <Paragraph>
          Hi, I'm a Full-stack engineer with 3 Years experience in designing and
          developing software applications using JavaScript, TypeScript, and
          React. I enjoy creating dynamic and interactive web applications that
          provide a seamless user experience. I'm passionate about staying
          up-to-date with the latest technologies and using them to solve
          complex problems.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <>
          <BioSection>Software Engineer</BioSection>
          <BioSection>
            <Link
              fontWeight="extrabold"
              target={'_blank'}
              href="https://trailfive.com/"
            >
              {' '}
              TrailFive Technologies • Full-time
            </Link>
          </BioSection>
          <BioSection>{formatDateRange(new Date('2022-07-01'))}</BioSection>
          <BioSection color={'GrayText'} mb={10}>
            Islamabad, Pakistan
          </BioSection>
        </>
        <>
          <BioSection>Software Engineer</BioSection>
          <BioSection>
            <Link fontWeight="extrabold" target={'_blank'}>
              {' '}
              The Codeditors • Full-time
            </Link>
          </BioSection>
          <BioSection>{formatDateRange(startDate1, endDate1)}</BioSection>
          <BioSection color={'GrayText'} mb={10}>
            Karachi, Pakistan
          </BioSection>
        </>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>Bachelor in Computer Science</BioSection>
        <BioSection>
          <Link
            href="https://ntu.edu.pk/"
            fontWeight="extrabold"
            target={'_blank'}
          >
            {' '}
            National Textile University.
          </Link>
        </BioSection>
        <BioSection>{'October 2017 - October 2021'}</BioSection>
        <BioSection color={'GrayText'} mb={10}>
          Faisalabad, Pakistan
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Tech Stack
        </Heading>
        <List>
          <ListItem>
            <Link href="https://www.javascript.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="yellow"
                leftIcon={<IoLogoJavascript />}
              >
                JavaScript (ES6)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://react.dev/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoReact />}
              >
                React.js
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://reactnative.dev/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="twitter"
                leftIcon={<TbBrandReactNative />}
              >
                React Native
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://redux-toolkit.js.org/" target="_blank">
              <Button variant="ghost" leftIcon={<SiRedux />} color={'#764abc'}>
                Redux Toolkit
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://nodejs.org/en/" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<IoLogoNodejs />}
                color={'#6cc24a'}
              >
                Node.js (REST APIs)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://graphql.org/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<GrGraphQl />}
                color={'#e535ab'}
              >
                GraphQl
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://firebase.google.com/" target="_blank">
              <Button
                variant="ghost"
                leftIcon={<IoLogoFirebase />}
                color={'#ffca28'}
              >
                Firebase
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.mysql.com/" target="_blank">
              <Button variant="ghost" leftIcon={<GrMysql />} color={'#f29111'}>
                MySQL
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.netlify.com/" target="_blank">
              <Button
                variant="ghost"
                // colorScheme="#20c6b7"
                leftIcon={<SiNetlify />}
                color={'#20c6b7'}
              >
                Netlify
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <Heading as="h3" variant="section-title">
          on Web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/reterXDark" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @reterXDark
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/ig_.taukeer" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @ig_.taukeer
              </Button>
            </Link>
          </ListItem>
        </List> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
