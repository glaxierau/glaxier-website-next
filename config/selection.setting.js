export const customStyles = (sm, useWindowSize) => ({
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? "#9FB0E4" : 'white',
        color: state.isFocused ? 'white' : '#9FB0E4',
        padding: 20,
        cursor: 'pointer'
    }),
    control: () => ({
        display: 'flex',
        width: sm ? 250 : 400,
        borderRadius: 100,
        padding: 4,
        border: '1px solid #9FB0E4',

    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        const color = '#9FB0E4'
        return { ...provided, opacity, transition, color };
    },

})