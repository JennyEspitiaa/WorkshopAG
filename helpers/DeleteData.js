const DeleteData = async (url, object = {}) => {
    const { data } = await axios.delete(url, object );
    return data;
  };

export default DeleteData;