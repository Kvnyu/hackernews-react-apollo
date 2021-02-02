async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } }
        ]
      }
    : {};

  const links = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy
  });

  const count = await context.prisma.link.count({ where });

  //todo make id something else, using args.skip creates a unique return id so that frontend cache doesn't overwrite each time
  return {
    id: args.take,
    links,
    count
  };
}

module.exports = {
  feed
};
