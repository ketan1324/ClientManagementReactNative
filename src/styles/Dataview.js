export const dataview = {
    textStyle: {
        flex: 1,
        color: '#000',
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 8,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 10,
        gap: "1rem"
    },
    text: {
        fontWeight: "bold",
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    card: {
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: '#cbd5e1',
        borderRadius: 8,
        padding: 10,
        flex: 1,
        width: "18rem"
    },
    cardContainer: {
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "10px",
        alignItems: "center"
    },
    stickyInput: {
        position: "sticky",
        top: "20px",
        zIndex: 100,
        backgroundColor: '#fff',
        opacity:1,
    },
    heightAndOverflow: {
        height:"80%",
        overflow: 'auto'
    },
    DataviewHeader:{
        display:"flex",
        flexDirection:"row",
        justifyContent: "space-evenly",
        padding:2
    },
    back:{
        padding:0
    }
};