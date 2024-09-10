

const NextSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <h1 style={styles.heading}>Floreo VR is an FDA breakthrough designated device for</h1>
        <h2 style={styles.subheading}>neurodiverse learners</h2>
        <h3 style={styles.subsubheading}>of any age and ability</h3>
        <p style={styles.paragraph}>
          At home or in the office, with just a smartphone or VR headset,
          individuals enter into a virtual learning environment where they can
          practice communication and social skills at their own pace.
        </p>
        <button style={styles.button}>Why Floreo</button>
      </div>
      <div style={styles.rightSection}>
        <div style={styles.imageContainer}>
          <img
            src="your-image-url" // Replace with your image URL
            alt="Person using VR"
            style={styles.image}
          />
          <div style={styles.textOverlay}>
            <p style={styles.overlayText}>neurodiverse learners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "50px",
    backgroundColor: "#ffffff", // white background
    color: "#0c0c7a", // dark blue text
    height: "auto",
    position: "relative",
  },
  leftSection: {
    flex: 1,
    paddingRight: "20px",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "normal",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "0px",
  },
  subsubheading: {
    fontSize: "28px",
    fontWeight: "normal",
    marginTop: "0px",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#ffc107", // yellow background
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#1a237e", // dark blue text
    cursor: "pointer",
    borderRadius: "5px",
  },
  rightSection: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
  },
  textOverlay: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#0c0c7a", // same dark blue as the text
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // slightly transparent white background
    padding: "20px",
    borderRadius: "10px",
  },
  overlayText: {
    fontSize: "36px",
    fontWeight: "bold",
  },
};

export default NextSection;
