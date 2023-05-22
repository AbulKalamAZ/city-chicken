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

  const footer = useRef<HTMLElement>(null);

  const CustomFooterButton = styled(Button)`
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    text-transform: capitalize;
    color: white;
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

  const intoView = () => {
    const footer = document.getElementById("footer");

    if (footer) {
      const elementTop = footer.getBoundingClientRect().top;
      const pageY = window.pageYOffset;
      const extraValue = window.innerWidth > 1024 ? 120 : 80;

      const combinedValue = elementTop + pageY - extraValue;

      window.scrollTo({
        top: combinedValue,
        behavior: "smooth",
      });
    }
  };

  const handleBtnClick = (e: any) => {
    const classes = e.target.classList;

    if (classes.contains("selected")) {
      classes.remove("selected");
      panelOne.current!.style.display = "none";
      panelTwo.current!.style.display = "none";
      panelThree.current!.style.display = "none";
      return 0;
    } else {
      // footer.current!.scrollIntoView({ behavior: "smooth" });
      classes.add("selected");
    }

    if (e.target === tabOne.current) {
      // footer.current!.scrollIntoView({ behavior: "smooth" });

      panelOne.current!.style.display = "block";

      panelTwo.current!.style.display = "none";
      panelThree.current!.style.display = "none";

      tabTwo.current!.classList.contains("selected")
        ? tabTwo.current!.classList.remove("selected")
        : console.log("not found 2");
      tabTwo.current!.classList.contains("selected")
        ? tabThree.current!.classList.remove("selected")
        : console.log("not found 3");

      intoView();
    } else if (e.target === tabTwo.current) {
      // footer.current!.scrollIntoView({ behavior: "smooth" });

      panelTwo.current!.style.display = "block";

      panelOne.current!.style.display = "none";
      panelThree.current!.style.display = "none";

      tabOne.current!.classList.contains("selected")
        ? tabOne.current!.classList.remove("selected")
        : console.log("not found 1");
      tabThree.current!.classList.contains("selected")
        ? tabThree.current!.classList.remove("selected")
        : console.log("not found 3");
      intoView();
    } else {
      // footer.current!.scrollIntoView({ behavior: "smooth" });

      panelThree.current!.style.display = "block";

      panelOne.current!.style.display = "none";
      panelTwo.current!.style.display = "none";

      tabOne.current!.classList.contains("selected")
        ? tabOne.current!.classList.remove("selected")
        : console.log("not found 1");
      tabTwo.current!.classList.contains("selected")
        ? tabTwo.current!.classList.remove("selected")
        : console.log("not found 2");
      intoView();
    }
  };

  return (
    <footer ref={footer} id="footer">
      <Box sx={{ mt: { xs: 25, md: 20 } }}>
        <Box
          sx={{
            backgroundColor: "#000000",

            padding: { xs: "32px 12px", sm: "32px" },
            position: "sticky",
            top: { xs: "80px", lg: "121px" },
          }}
        >
          <Box
            sx={{
              marginLeft: { xs: 0, lg: 35, xl: 21 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              alignContent: "space-between",
              gap: { xs: "4px", sm: "16px", md: "18px", lg: "20px" },
            }}
          >
            <CustomFooterButton
              disableRipple
              ref={tabOne}
              onClick={handleBtnClick}
              data-value="0"
              sx={{
                fontSize: {
                  xs: "12px",
                  sm: "12px",
                  md: "14px",
                  lg: "16px",
                  xl: "20px",
                },
                margin: { xs: 0, md: "6px" },
                padding: { xs: "4px", sm: "4px 6px", md: "6px 8px" },
              }}
            >
              Impressum
            </CustomFooterButton>
            <CustomFooterButton
              disableRipple
              ref={tabTwo}
              onClick={handleBtnClick}
              data-value="1"
              sx={{
                fontSize: {
                  xs: "12px",
                  sm: "12px",
                  md: "14px",
                  lg: "16px",
                  xl: "20px",
                },
                margin: { xs: 0, md: "6px" },
                padding: { xs: "4px", sm: "4px 6px", md: "6px 8px" },
              }}
            >
              Datenschutz
            </CustomFooterButton>
            <CustomFooterButton
              disableRipple
              ref={tabThree}
              onClick={handleBtnClick}
              data-value="2"
              sx={{
                minWidth: {
                  xs: "48px !important",
                  sm: "56px !important",
                  md: "72px !important",
                },
                fontSize: {
                  xs: "12px",
                  sm: "12px",
                  md: "14px",
                  lg: "16px",
                  xl: "20px",
                },
                margin: { xs: 0, md: "6px" },
                padding: { xs: "4px", sm: "4px 6px", md: "6px 8px" },
              }}
            >
              AGB
            </CustomFooterButton>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: {
                  xs: "12px",
                  sm: "12px",
                  md: "14px",
                  lg: "16px",
                  xl: "20px",
                },
                fontWeight: "700",
                color: "white",
                margin: { xs: 0, md: "6px" },
              }}
            >
              © CNetX GmbH
            </Typography>
          </Box>
        </Box>

        <Box ref={panelOne} sx={{ display: "none", minHeight: "100vh" }}>
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

        <Box ref={panelTwo} sx={{ display: "none", minHeight: "100vh" }}>
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

        <Box ref={panelThree} sx={{ display: "none", minHeight: "100vh" }}>
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
