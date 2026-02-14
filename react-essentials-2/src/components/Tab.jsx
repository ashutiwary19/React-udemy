
export default function Tab({children, buttons, ButtonsContainer}) {
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}