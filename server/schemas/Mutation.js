function post(parent, args, context, info) {
    const { userId } = context;
  
    const newLink = context.prisma.link.create({
      data: {
        url: args.url,
        description: args.description,
        postedBy: { connect: { id: userId } }
      }
    });
  
    return newLink;
  }