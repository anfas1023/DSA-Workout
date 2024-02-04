// tree is  a hirarcheal data structure that consist of node connected by edges 
// no-leniear data structure

// tree is non-linear nature allow quicker and easier acess to the data




// degeree of a node- The total count of subtrees attached to that node is called the degree of the node.
// degree of a tree is the maximum degree of a node among all the nodes in the tree.

// The depth of a node is defined as the length of the path from the root to that node.
// Each edge adds 1 unit of length to the path. So, it can also be defined as the number of edges in the path from the root of the tree to the node.
// depth of a root node is always 0

// HEIGHT

// Height of a node: The height of a node can be defined as the length of the longest path from the node to a leaf node of the tree.
// Height of the Tree: The height of a tree is the length of the longest path from the root of the tree to a leaf node of the tree.

// types of tree

//  In a binary tree, each node can have a maximum of two children linked to it. Some common types of binary trees include full binary trees, complete binary trees, balanced binary trees, and degenerate or pathological binary trees.


// A full binary tree is a binary tree in which every node has either 0 or 2 children.
// Every level is completely filled, except possibly for the last level.

//   1
// /   \
// 2     3
// / \   / \
// 4   5 6   7

// A complete binary tree is a binary tree in which all levels are completely filled, except possibly for the last level.

  
// 1
// /   \
// 2     3
// / \   /

// 4   5 6


// A perfect binary tree is a binary tree in which all internal nodes have exactly two children, 
// and all leaf nodes are at the same level.

// 1
// /   \
// 2     3
// / \   / \
// 4   5 6   7


// properties of binary sesrch tree

// all elements in the left subtree are less than the node, and all elements in the right subtree are greater than the node. 
// : BSTs cannot have duplicate values. Each value should be unique within the tree 

// bst are used in indexing
// various searching algorithem
// used in various data structure
// used in desion tree in ai and machine laerning
// used in encryption algorithem 
// computer simlation store and retrive data

// advantage of bst



// BST is fast in insertion and deletion when balanced. It is fast with a time complexity of O(log n).
// BST is also for fast searching, with a time complexity of O(log n) for most operations.
// BST can automatically sort elements as they are inserted, so the elements are always stored in a sorted order.
// BST is efficient. It is efficient because they only store the elements and do not require additional memory for pointers or other data structures.



// disadvantage 

// The main disadvantage is that we should always implement a balanced binary search tree. 
// Otherwise the cost of operations may not be logarithmic and degenerate into a linear search on an array.

// Do not support some operations that are possible with ordered data structures.


// types of tree
// binary tree
// ternary tree
// n array-generiic tree


// AVL tree
// AVL tree is a self-balancing Binary Search Tree (BST) where the difference between heights of left and right subtrees cannot be more than one for all nodes
// red black tree
// A red-black tree is a kind of self-balancing binary search tree where each node has an extra bit, and that bit is often interpreted as the color (red or black).
//  These colors are used to ensure that the tree remains balanced during insertions and deletions.



// Serialization of a binary tree involves converting a binary tree into a format that can be easily stored in a file or transmitted over a network. 

// Deserializing a binary tree involves converting a serialized string back into a binary tree structure.


