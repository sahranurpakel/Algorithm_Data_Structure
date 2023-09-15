class TrieNode {
  constructor() {
    this.children = {};
    this.endOfString = false;
  }
}

class Trie {
  constructor() {
    this.root = null;
  }
  insert(word) {
    if (this.root === null) {
      this.root = new TrieNode();
    }
    let node = this.root;
    for (var i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.endOfString = true;
  }
  serach(word) {
    let node = this.root;
    for (var i = 0; i < word.length; i++) {
      let char = word[i];
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.endOfString;
  }
  compare(word) {
    let node = this.root;
    let root = this.root;
    let Lastword = "";
    if (root.endOfString) {
      if (root.children[word[0]]) {
        Lastword += word[0];
        return Lastword;
      }
    }
    for (var i = 0; i < word.length; i++) {
      let char = word[i];
      Lastword += char;

      if (node.endOfString) {
        Lastword = Lastword.substring(0, Lastword.length - 1);
        return Lastword;
      }
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return false;
  }

  compare2(word) {
    let node = this.root;
    let Lastword = "";

    for (var i = 0; i < word.length; i++) {
      let char = word[i];
      Lastword += char;

      if (!node.children[char]) {
        break;
      }
      node = node.children[char];

      if (node.endOfString) {
        return Lastword;
      }
    }

    return false;
  }
}
var replaceWords = function (dictionary, sentence) {
  let trie = new Trie();
  dictionary.forEach((element) => {
    trie.insert(element);
  });
  let senteceArr = sentence.split(" ");
  console.log(senteceArr);
  for (var i = 0; i < senteceArr.length; i++) {
    if (trie.compare2(senteceArr[i])) {
      senteceArr[i] = trie.compare2(senteceArr[i]);
    }
  }
  let result = "";
  senteceArr.forEach((element) => (result += " " + element));
  result = result.trim();
  console.log("______________________", result);
  return result;
};
replaceWords(["a", "caaat", "bat", "rat"], "aaaa aaaaaaaaaa ababa bbaaa ba a");
