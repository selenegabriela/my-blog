


export const handleDeletePost = async (postId, setId, deletePost, setMessageDelete, posts, setPosts) => {

    const accept = confirm('¿Deseas eliminar esta entrada?');
    if (!accept) return;
    
    try {
      await deletePost(postId);
      
      const updatedPosts = posts.filter(post => post.id !== postId);
      setId(postId);
      
      setMessageDelete('Post eliminado correctamente.');
      setTimeout(() => {
        setMessageDelete('');
        setPosts(updatedPosts);

      }, 2000);
    } catch (error) {
      setMessageDelete('Error al eliminar el post. Inténtalo de nuevo más tarde.');
    }
  };
