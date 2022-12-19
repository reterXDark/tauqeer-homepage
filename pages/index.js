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
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        mt={10}
        py={3}
        textAlign="center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        fontFamily='"JetBrains Mono", sans-serif'
        fontSize={15}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        <p>I'm a Software Engineer (Full Stack Developer).</p>

        <Link
          href="https://github.com/reterXDark"
          isExternal
          color={'blackAlpha.900'}
        >
          See Github <ExternalLinkIcon mx="1px" />
        </Link>
      </Box>

      <Box
        display={{ md: 'flex' }}
        fontFamily='"JetBrains Mono", sans-serif'
        fontWeight={'normal'}
      >
        <Box flexGrow={1}>
          <Heading as="h1" variant="page-title" fontWeight={'black'}>
            Tauqeer Nasir
          </Heading>
          <p>Software Engineer.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/tauqeer.png"
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
          Tauqeer is a Software Engineer with 2 Years of Experience in Both
          Mobile & Web Apllication based in Pakistan with a passion for building
          digital services/stuff he wants. He has a knack for all things
          launching products, from planning and designing all the way to solving
          real-life problems with code. When not online, he loves to listen
          Islamic Podcast.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Biography
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Sahiwal (ساہِيوال), Pakistan.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed the Bechelors Program in Computer Science at National
          Textile University, Faisalabad (نیشنل ٹیکسٹائل یونیورسٹی, فیصل آباد)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at The Codeditors Karachi, Pakistan
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Works as a freelancer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Islamic Podcast, designing, Photography, Programming.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/reterXDark" target="_blank">
              <Button
                variant="ghost"
                colorScheme="gray"
                leftIcon={<IoLogoGithub />}
              >
                See my github!
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#" target="_top">
              <Button
                // variant="ghost"
                colorScheme="red"
                leftIcon={<IoLogoClosedCaptioning />}
                disabled={true}
              >
                This Section is Under Developement Phase!
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Skills
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
            <Link href="https://reactjs.org/" target="_blank">
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
                leftIcon={<IoLogoReact />}
              >
                React Native (Complete iOS & Android Apps)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://nodejs.org/en/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="green"
                leftIcon={<IoLogoNodejs />}
              >
                Node.js (Rest APIs)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://firebase.google.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="yellow"
                leftIcon={<IoLogoFirebase />}
              >
                Firebase
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://firebase.google.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoReact />}
              >
                Redux
              </Button>
            </Link>
          </ListItem>
        </List>

        <Heading as="h3" variant="section-title">
          Socials
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
            <Link href="#" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @reterX_Dark (English)
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
          <ListItem>
            <Link
              href="https://www.facebook.com/tauqeernasir97"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="facebook"
                leftIcon={<IoLogoFacebook />}
              >
                @tauqeernasir97
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
