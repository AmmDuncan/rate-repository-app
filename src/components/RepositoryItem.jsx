import { StyleSheet, View, Image } from "react-native";
import theme from "../theme";

import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 12
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    flex: 1
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 4
  },
  mainTextContainer: {
    flex: 1
  },
  language: {
    color: theme.colors.white,
  },
  languageWrapper: {
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 4
  },
  spaceBefore: {
    marginTop: 2
  },
  spaceAfter: {
    marginBottom: 4
  },
  spaceAfter8: {
    marginBottom: 8
  },
  hSpacer: {
    width: 12
  },
  vSpacer: {
    height: 12
  },
  description: {
    lineHeight: 20
  },
  footerContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 8
  },
  footerItem: {
    alignItems: "center"
  },
  footerValue: {
    color: theme.colors.textPrimary,
    fontWeight: "bold"
  },
  footerLabel: {
    color: theme.colors.textSecondary
  }
});

const Br = () => <View style={styles.vSpacer}></View>;

const FooterItem = ({ label, value }) => {
  const valueStyles = [styles.spaceAfter, styles.footerValue];
  const labelStyles = [styles.spaceAfter, styles.footerLabel];
  return (
    <View style={styles.footerItem}>
      <Text style={valueStyles}>{value}</Text>
      <Text style={labelStyles}>{label}</Text>
    </View>
  );
};

const formatValue = (num) => {
  try {
    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + "k" : Math.sign(num) * Math.abs(num);
  } catch (e) {
  }
};

const RepoFooter = (props) => {
  return (
    <View style={styles.footerContainer}>
      <FooterItem label="Stars" value={formatValue(props.stargazersCount)} />
      <FooterItem label="Forks" value={formatValue(props.forksCount)} />
      <FooterItem label="Reviews" value={formatValue(props.reviewCount)} />
      <FooterItem label="Rating" value={formatValue(props.ratingAverage)} />
    </View>
  );
};

const RepositoryItem = ({ repository }) => {
  const { language, languageWrapper, spaceAfter, spaceAfter8, hSpacer, description } = styles;
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Image style={styles.profileImage} source={{ uri: repository.ownerAvatarUrl }} />
        <View style={hSpacer} />
        <View style={styles.mainTextContainer}>
          <Text
            fontSize="subheading"
            color="textPrimary"
            fontWeight="bold"
            style={[spaceAfter]}
          >
            {repository.fullName}
          </Text>
          <Text color="textSecondary" style={[spaceAfter8, description]}>{repository.description}</Text>
          <View style={[languageWrapper]}><Text style={[language]}>{repository.language}</Text></View>
        </View>
      </View>
      <Br />
      <RepoFooter {...repository} />
    </View>
  );
};

export default RepositoryItem;
