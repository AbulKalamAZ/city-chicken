import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useRef } from "react";

const Footer = () => {
  const selectedTab = useRef(null);
  const tabOne = useRef<HTMLButtonElement>(null);
  const tabTwo = useRef<HTMLButtonElement>(null);
  const tabThree = useRef<HTMLButtonElement>(null);

  const panelOne = useRef<HTMLDivElement>(null);
  const panelTwo = useRef<HTMLDivElement>(null);
  const panelThree = useRef<HTMLDivElement>(null);

  const CustomFooterButton = styled(Button)`
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    text-transform: capitalize;
    color: white;
    margin: 6px 6px;
    border: none;
    display: flex;
    justify-content: center;
    cursor: pointer;

    &:hover {
      color: #f7ab3c;
    }

    &.selected {
      color: #f7ab3c;
    }
  `;

  const handleBtnClick = (e: any) => {
    const classes = e.target.classList;

    if (classes.contains("selected")) {
      classes.remove("selected");
      panelOne.current!.style.display = "none";
      panelTwo.current!.style.display = "none";
      panelThree.current!.style.display = "none";
      return 0;
    } else {
      classes.add("selected");
    }

    if (e.target === tabOne.current) {
      panelOne.current!.style.display = "block";

      panelTwo.current!.style.display = "none";
      panelThree.current!.style.display = "none";

      tabTwo.current!.classList.contains("selected")
        ? tabTwo.current!.classList.remove("selected")
        : console.log("not found 2");
      tabTwo.current!.classList.contains("selected")
        ? tabThree.current!.classList.remove("selected")
        : console.log("not found 3");
    } else if (e.target === tabTwo.current) {
      panelTwo.current!.style.display = "block";

      panelOne.current!.style.display = "none";
      panelThree.current!.style.display = "none";

      tabOne.current!.classList.contains("selected")
        ? tabOne.current!.classList.remove("selected")
        : console.log("not found 1");
      tabThree.current!.classList.contains("selected")
        ? tabThree.current!.classList.remove("selected")
        : console.log("not found 3");
    } else {
      panelThree.current!.style.display = "block";

      panelOne.current!.style.display = "none";
      panelTwo.current!.style.display = "none";

      tabOne.current!.classList.contains("selected")
        ? tabOne.current!.classList.remove("selected")
        : console.log("not found 1");
      tabTwo.current!.classList.contains("selected")
        ? tabTwo.current!.classList.remove("selected")
        : console.log("not found 2");
    }
  };

  return (
    <footer>
      <Box sx={{ mt: { xs: 25, md: 20 } }}>
        <Box
          sx={{
            backgroundColor: "#000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            alignContent: "space-between",
            gap: "32px",
            padding: "32px",
          }}
        >
          <CustomFooterButton
            disableRipple
            ref={tabOne}
            onClick={handleBtnClick}
            data-value="0"
          >
            Impressum
          </CustomFooterButton>
          <CustomFooterButton
            disableRipple
            ref={tabTwo}
            onClick={handleBtnClick}
            data-value="1"
          >
            Datenschutz
          </CustomFooterButton>
          <CustomFooterButton
            disableRipple
            ref={tabThree}
            onClick={handleBtnClick}
            data-value="2"
          >
            AGB
          </CustomFooterButton>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "700",
              color: "white",
              margin: "6px 6px",
            }}
          >
            © CNetX GmbH
          </Typography>
        </Box>

        <Box ref={panelOne} sx={{ display: "none" }}>
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
              tempora. Quaerat libero recusandae temporibus? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Nam, aspernatur quo
              architecto fugit ipsa, minus vel veniam labore repellendus aliquam
              molestiae officia laudantium unde enim tempora. Quaerat libero
              recusandae temporibus? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nam, aspernatur quo architecto fugit ipsa, minus
              vel veniam labore repellendus aliquam molestiae officia laudantium
              unde enim tempora. Quaerat libero recusandae temporibus? Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Nam,
              aspernatur quo architecto fugit ipsa, minus vel veniam labore
              repellendus aliquam molestiae officia laudantium unde enim
              tempora. Quaerat libero recusandae temporibus?
            </Typography>
          </Container>
        </Box>

        <Box ref={panelTwo} sx={{ display: "none" }}>
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
              tempora. Quaerat libero recusandae temporibus? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Nam, aspernatur quo
              architecto fugit ipsunde enim tempora. Quaerat libero recusandae
              temporibus? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Nam, aspm molestiae officia laudantium unde enim tempora.
              Quaerat libero recusandae temporibus?
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
              tempora. Quaerat libero recusandae temporibus? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Nam, aspernatur quo
              architecto fugit ipsunde enim tempora. Quaerat libero recusandae
              temporibus? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Nam, aspm molestiae officia laudantium unde enim tempora.
              Quaerat libero recusandae temporibus?
            </Typography>
          </Container>
        </Box>

        <Box ref={panelThree} sx={{ display: "none" }}>
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
              tempora. Quaerat libero recusandae temporibus? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Nam, aspernatur quo
              architecto fugit ipsa, minus vel veniam labore repellendus aliquam
              molestiae officia laudantium unde enim tempora. Quaerat libero
              recusandae temporibus? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nam, aspernatur quo architecto fugit ipsa, minus
              vel veniam labore repellendus aliquam molestiae officia laudantium
              unde enim tempora. Quaerat libero recusandae temporibus? Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Nam,
              aspernatur quo architecto fugit ipsa, minus vel veniam labore
              repellendus aliquam molestiae officia laudantium unde enim
              tempora. Quaerat libero recusandae temporibus?
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
              tempora. Quaerat libero recusandae temporibus? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Nam, aspernatur quo
              architecto fugit ipsa,rnatur quo architecto fugit ipsa, minus vel
              veniam labore repellendus aliquam molestiae officia laudantium
              unde enim tempora. Quaerat libero recusandae temporibus?
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
              tempora. Quaerat libero recusandae temporibus? Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Nam, aspernatur quo
              architecto fugit ipsa, minus vel veniam labore repellendus aliquam
              molestiae officia laudantium unde enim tempora. Quaerat libero
              recusandae temporibus? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Nam, aspernatur quo architecto fugit ipsa, minus
              vel veniam labore repellendus aliquam molestiae officia laudantium
              unde enim tempora. Quaerat libero recusandae temporibus? Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Nam,
              aspernatur quo architecto fugit ipsa, minus vel veniam labore
              repellendus aliquam molestiae officia laudantium unde enim
              tempora. Quaerat libero recusandae temporibus?
            </Typography>
          </Container>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
