import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Footer = () => {
  const Tab = styled(TabUnstyled)`
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    color: white;
    margin: 6px 6px;
    border: none;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
      color: #f7ab3c;
    }

    &:focus {
      color: #f7ab3c;
      outline: none;
    }

    &.${tabUnstyledClasses.selected} {
      color: #f7ab3c;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const TabsList = styled(TabsListUnstyled)`
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: space-between;
    gap: 32px;
    padding: 32px;

    span {
      font-family: Inter;
      font-size: 16px;
      font-weight: 700;
      color: white;
      margin: 6px 6px;
    }
  `;

  return (
    <footer>
      <Box sx={{ mt: { xs: 25, md: 20 } }}>
        <TabsUnstyled
          defaultValue={0}
          aria-label="Tabs where selection follows focus"
          selectionFollowsFocus
        >
          <TabsList>
            <Tab>Impressum</Tab>
            <Tab>Datenschutz</Tab>
            <Tab>AGB</Tab>
            <span>© CNetX GmbH</span>
          </TabsList>

          <TabPanelUnstyled value={0}>
            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 } }}>
              <Typography
                sx={{
                  color: "#3B3A4A ",
                  fontSize: "32px",
                  fontWeight: 400,
                  fontFamily: "Contrail One !important",
                  mb: 2,
                }}
              >
                Impressum
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#838383",
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                aspernatur quo architecto fugit ipsa, minus vel veniam labore
                repellendus aliquam molestiae officia laudantium unde enim
                tempora. Quaerat libero recusandae temporibus? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Nam, aspernatur
                quo architecto fugit ipsa, minus vel veniam labore repellendus
                aliquam molestiae officia laudantium unde enim tempora. Quaerat
                libero recusandae temporibus? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Nam, aspernatur quo architecto
                fugit ipsa, minus vel veniam labore repellendus aliquam
                molestiae officia laudantium unde enim tempora. Quaerat libero
                recusandae temporibus? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Nam, aspernatur quo architecto fugit ipsa,
                minus vel veniam labore repellendus aliquam molestiae officia
                laudantium unde enim tempora. Quaerat libero recusandae
                temporibus?
              </Typography>
            </Container>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={1}>
            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 } }}>
              <Typography
                sx={{
                  color: "#3B3A4A ",
                  fontSize: "32px",
                  fontWeight: 400,
                  fontFamily: "Contrail One !important",
                  mb: 2,
                }}
              >
                Datenschutz
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#838383",
                  mb: 4,
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                aspernatur quo architecto fugit ipsa, minus vel veniam labore
                repellendus aliquam molestiae officia laudantium unde enim
                tempora. Quaerat libero recusandae temporibus? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Nam, aspernatur
                quo architecto fugit ipsunde enim tempora. Quaerat libero
                recusandae temporibus? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Nam, aspm molestiae officia laudantium unde
                enim tempora. Quaerat libero recusandae temporibus?
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#838383",
                  mb: 4,
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                aspernatur quo architecto fugit ipsa, minus vel veniam labore
                repellendus aliquam molestiae officia laudantium unde enim
                tempora. Quaerat libero recusandae temporibus? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Nam, aspernatur
                quo architecto fugit ipsunde enim tempora. Quaerat libero
                recusandae temporibus? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Nam, aspm molestiae officia laudantium unde
                enim tempora. Quaerat libero recusandae temporibus?
              </Typography>
            </Container>
          </TabPanelUnstyled>
          <TabPanelUnstyled value={2}>
            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 } }}>
              <Typography
                sx={{
                  color: "#3B3A4A ",
                  fontSize: "32px",
                  fontWeight: 400,
                  fontFamily: "Contrail One !important",
                  mb: 2,
                }}
              >
                Allgemeine Geschäftsbedingungen
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#838383",
                  mb: 4,
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                aspernatur quo architecto fugit ipsa, minus vel veniam labore
                repellendus aliquam molestiae officia laudantium unde enim
                tempora. Quaerat libero recusandae temporibus? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Nam, aspernatur
                quo architecto fugit ipsa, minus vel veniam labore repellendus
                aliquam molestiae officia laudantium unde enim tempora. Quaerat
                libero recusandae temporibus? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Nam, aspernatur quo architecto
                fugit ipsa, minus vel veniam labore repellendus aliquam
                molestiae officia laudantium unde enim tempora. Quaerat libero
                recusandae temporibus? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Nam, aspernatur quo architecto fugit ipsa,
                minus vel veniam labore repellendus aliquam molestiae officia
                laudantium unde enim tempora. Quaerat libero recusandae
                temporibus?
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#838383",
                  mb: 4,
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                aspernatur quo architecto fugit ipsa, minus vel veniam labore
                repellendus aliquam molestiae officia laudantium unde enim
                tempora. Quaerat libero recusandae temporibus? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Nam, aspernatur
                quo architecto fugit ipsa,rnatur quo architecto fugit ipsa,
                minus vel veniam labore repellendus aliquam molestiae officia
                laudantium unde enim tempora. Quaerat libero recusandae
                temporibus?
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#838383",
                  mb: 4,
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                aspernatur quo architecto fugit ipsa, minus vel veniam labore
                repellendus aliquam molestiae officia laudantium unde enim
                tempora. Quaerat libero recusandae temporibus? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Nam, aspernatur
                quo architecto fugit ipsa, minus vel veniam labore repellendus
                aliquam molestiae officia laudantium unde enim tempora. Quaerat
                libero recusandae temporibus? Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Nam, aspernatur quo architecto
                fugit ipsa, minus vel veniam labore repellendus aliquam
                molestiae officia laudantium unde enim tempora. Quaerat libero
                recusandae temporibus? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Nam, aspernatur quo architecto fugit ipsa,
                minus vel veniam labore repellendus aliquam molestiae officia
                laudantium unde enim tempora. Quaerat libero recusandae
                temporibus?
              </Typography>
            </Container>
          </TabPanelUnstyled>
        </TabsUnstyled>
      </Box>
    </footer>
  );
};

export default Footer;
