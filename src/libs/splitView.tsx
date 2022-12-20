import React from 'react';
import { StyleSheet, View } from 'react-native';

type SplitViewType = {
  master: React.ReactElement | undefined;
  detail: React.ReactElement | undefined;
};

const SplitView = ({ master, detail }: SplitViewType) => {
  return (
    <View style={styles.container}>
      <View style={styles.masterView}>{master}</View>
      <View style={styles.detailView}>{detail}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row' },
  masterView: {
    flex: 1,
    maxWidth: 400,
    borderRightWidth: 1,
  },
  detailView: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default SplitView;
