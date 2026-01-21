const LoadingState = () => {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="channel-item loading-pulse">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full skeleton" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-32 skeleton" />
              <div className="h-3 w-48 skeleton" />
              <div className="flex gap-4">
                <div className="h-3 w-16 skeleton" />
                <div className="h-3 w-12 skeleton" />
              </div>
            </div>
            <div className="h-4 w-20 skeleton" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingState;
