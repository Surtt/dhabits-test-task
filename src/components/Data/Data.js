import React, { useState } from 'react';
import getData from '../../api/dataAPI';
import 'antd/dist/antd.css';
import { Tree } from 'antd';
const { DirectoryTree } = Tree;

const updateTreeData = (list, key, children) => {
  return list.map((node) => {
    if (node.key === key) {
      return { ...node, children };
    }
    if (node.children) {
      return { ...node, children: updateTreeData(node.children, key, children) };
    }
    return node;
  });
}

const updateNode = (data) => {
  const result = data.reduce((acc, { id, title, children }) => {
    if (children) {
      acc = [...acc, { key: id, title, children: [] }];
    } else {
      acc = [...acc, { key: id, title, isLeaf: true }];
    }
    return acc;
  }, []);
  return result;
}

const Data = () => {
  const [treeData, setTreeData] = useState([{ title: 'root', key: '0' }]);
  const onLoadData = ({ key }) => {
    return new Promise((resolve) => {
      getData(key).then((res) => {
        setTreeData((origin) =>
          updateTreeData(origin, key, updateNode(res.data.children)));
        resolve();
      })
        .catch((err) => console.log(err));
    })
  }
  return <DirectoryTree loadData={onLoadData} treeData={treeData} />;
};

export default Data;
