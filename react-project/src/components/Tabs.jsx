export default function Tabs({ children, buttons, buttonsContainer = "menu"}) {
    const ButtonsCatainer = buttonsContainer;
  return (
    <>
      <ButtonsCatainer>
          {buttons}
        </ButtonsCatainer>
      {children}
    </>
  );
}
