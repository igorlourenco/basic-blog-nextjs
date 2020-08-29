import React from "react";
import { Box, Flex, Heading, PseudoBox, Text } from "@chakra-ui/core";
import { FaTwitter, FaInstagram, FaGithub, FaHandHoldingHeart } from "react-icons/fa";

const MenuItems = ({ children }) => (
    <Text mr={6} display="block">
        {children}
    </Text>
);

export default function Header(props) {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            borderBottom="1px"
            borderBottomColor="brand.900"
            py={1}
            px={6}
            bg="brandSecondary.900"
            color="brand.900"
            shadow="5px 10px brandSecondary.700"
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                    Chakra UI
                </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <svg
                    fill="white"
                    width="12px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </Box>

            <Box
                display={{ base: show ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
            >
                <MenuItems>Docs</MenuItems>
                <MenuItems>Examples</MenuItems>
                <MenuItems>Blog</MenuItems>
            </Box>

            <Box
                display={{ base: show ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Box as={FaGithub} size="24px" pr={3} pl={3} color="brand.800" />
                <Box as={FaTwitter} size="24px" pr={3} pl={3} color="brand.800" />
                <Box as={FaInstagram} size="24px" pr={3} pl={3} color="brand.800" />
            </Box>
        </Flex>
    )
}